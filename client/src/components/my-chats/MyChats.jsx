import { useContext } from 'react';
import styles from './MyChat.module.css';
import { UserContext } from '../../contexts/UserContext';
import { useGetChats } from '../../hooks/useGetChats';

export default function MyChats(){
    const {user} = useContext(UserContext)
    const {chats} = useGetChats(user._id);

    console.log(chats);
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
        {chats.map((chat) => {
          const lastMessage = chat.messages[chat.messages.length - 1]?.content || 'No messages yet';
          return (
            <div key={chat._id} className={styles.conversation}>
              <img
                className={styles['my-chats-imgs']}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4n4D5jth4fm4GE7ut7lWW-04lnDO2OkD-sg&s"
                alt="Chat Avatar"
              />
              <p>{lastMessage}</p>
              <p className={styles.time}>{new Date(lastMessage.timestamp).getHours()}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
