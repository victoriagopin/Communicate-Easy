import { useContext, useEffect, useState } from 'react';
import styles from './MyChat.module.css';
import { UserContext } from '../../contexts/UserContext';
import { useGetChats } from '../../hooks/useGetChats';
import { timeConverter } from '../../helpers/convertTime';
import { fetchProfile } from '../../helpers/fetchProfile';
import { useForm } from '../../hooks/useForm';
import { post } from '../../api/requester';

export default function MyChats(){
    const {user, profile} = useContext(UserContext)
    const {chats} = useGetChats(user?._id);
    const initialChat = chats[chats.length - 1];
    const [lastChat, setLastChat] = useState(initialChat);
    const [profiles, setProfiles] = useState([]);
    const initialValues = {
        content : '',
        sender : user?._id,
        participants : [user?._id, null]
   }
    const {values, changeValues} = useForm(initialValues);

    useEffect(() => {
        if (chats.length > 0) {
            setLastChat(chats[chats.length - 1]);
        }
    }, [chats]);

    console.log(lastChat);
    console.log(chats);

    useEffect(() => {
        const fetchAllProfiles = async () => {
            const profilesMap = [];
            for (const chat of chats) {
                //тук връща ID 
                let sender = chat.participants[1];

                if(sender == profile.owner){
                    console.log('vlizam');
                    sender = chat.participants[0];
                    console.log(sender);
                }

                if (sender) {
                    const { name } = await fetchProfile(sender);
                    console.log(name);
                    profilesMap.push(name);
                }
            }
            setProfiles(profilesMap);
        };

        if (chats.length) {
            fetchAllProfiles();
        }
    }, [chats,lastChat]);

    const showClickedChat = (chatId) => {
        let result = chats.find((chat) => chat._id == chatId);
        setLastChat(result);
    }

    const onSend = async(e) => {
        e.preventDefault();
        const recieverId = lastChat?.participants.find((id) => id != user?._id);
        
        const updatedParticipants = [user._id, recieverId];

        changeValues({ target: { name: 'participants', value: updatedParticipants}});

        const sent = await post(`chat`, {...values, participants: updatedParticipants});
        setLastChat(sent);

        changeValues({ target: { name: 'content', value: '' } });
    }

    return(
        <>
            <div className={styles.box}>
            {lastChat ? (
                <ul className={styles["chat-thread"]}>
                    {lastChat.messages.map((message)=> 
                    message.sender == user?._id ?
                        (<li className={styles.sender} key={message._id}>{message.content}</li> )
                        :
                        (<li className={styles.reciever} key={message._id}>{message.content}</li> )
                    )}
                </ul>
            )
                : <p>No messages yet</p>
        }
                
          
            <form className={styles["chat-window"]}>
	            <input 
                    className={styles["chat-window-message"]} 
                    name="content" 
                    type="text" 
                    autoComplete="off" 
                    autoFocus 
                    value={values.content}
                    onChange={changeValues}
                    placeholder='Message...'/>
                    <button className={styles.send} onClick={onSend}>Send</button>
            </form>
            </div>

            <div className={styles.left}>
        <h2 className={styles.heading}>Your Chats</h2>
        {chats.map((chat, i) => {
          const lastMessage = chat.messages[chat.messages.length - 1]?.content || 'No messages yet';
          const unconvertedTime = chat.messages[chat.messages.length - 1]?.timestamp;
          const {hour, minutes, day} =timeConverter(unconvertedTime);
          return (
            <div key={chat._id} className={styles.conversation} onClick={() => showClickedChat(chat._id)}>
              <img
                className={styles['my-chats-imgs']}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4n4D5jth4fm4GE7ut7lWW-04lnDO2OkD-sg&s"
                alt="Chat Avatar"
              />
              <div className={styles["inside-box"]}>
              <p>{profiles[i]}</p>
              <p className={styles['last-msg']}>{lastMessage}</p>
              </div>
             
              <p className={styles.time}>{day} {hour}:{minutes}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
