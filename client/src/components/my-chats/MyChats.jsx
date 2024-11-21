import { useContext, useEffect, useState } from 'react';
import styles from './MyChat.module.css';
import { UserContext } from '../../contexts/UserContext';
import { useGetChats } from '../../hooks/useGetChats';
import { timeConverter } from '../../helpers/convertTime';
import { fetchProfile } from '../../helpers/fetchProfile';

export default function MyChats(){
    const {user} = useContext(UserContext)
    const {chats} = useGetChats(user._id);
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        const fetchAllProfiles = async () => {
            const profilesMap = [];
            for (const chat of chats) {
                const sender = chat.messages[chat.messages.length - 1]?.sender;
                if (sender) {
                    const { name } = await fetchProfile(sender);
                    profilesMap.push(name);
                }
            }
            setProfiles(profilesMap);
        };

        if (chats.length) {
            fetchAllProfiles();
        }
    }, [chats]);

    return(
        <>
            <div className={styles.box}>
                <ul className={styles["chat-thread"]}>
                        <li className={styles.sender}>Hi</li> 
                </ul>
          
            <form className={styles["chat-window"]}>
	            <input 
                    className={styles["chat-window-message"]} 
                    name="content" 
                    type="text" 
                    autoComplete="off" 
                    autoFocus 
                    // value={values.content}
                    // onChange={changeValues}
                    placeholder='Message...'/>
                    <button className={styles.send}>Send</button>
            </form>
            </div>

            <div className={styles.left}>
        <h2 className={styles.heading}>Your Chats</h2>
        {chats.map((chat, i) => {
          const lastMessage = chat.messages[chat.messages.length - 1]?.content || 'No messages yet';
          const unconvertedTime = chat.messages[chat.messages.length - 1]?.timestamp;
          const {hour, minutes} =timeConverter(unconvertedTime);
          return (
            <div key={chat._id} className={styles.conversation}>
              <img
                className={styles['my-chats-imgs']}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4n4D5jth4fm4GE7ut7lWW-04lnDO2OkD-sg&s"
                alt="Chat Avatar"
              />
              <div className={styles["inside-box"]}>
              <p>{profiles[i]}</p>
              <p className={styles['last-msg']}>{lastMessage}</p>
              </div>
             
              <p className={styles.time}>{hour}:{minutes}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
