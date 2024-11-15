import { useParams } from 'react-router-dom'
import styles from './Chat.module.css'
import { useGetChat } from '../../hooks/useGetChat';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { post } from '../../api/requester';
import { useForm } from '../../hooks/useForm';

export default function Chat(){
    const {id} = useParams();
    const {user} = useContext(UserContext);

    const initialValues = {
        content : '',
        sender : user?._id,
        participants : [user._id, id]
   }

    const {values, changeValues} = useForm(initialValues);
    const {chat, setChat} = useGetChat(user._id, id);

    const onSend = async(e) => {
        e.preventDefault();
        const sent = await post(`chat`, values);
        setChat(sent);
        changeValues({ target: { name: 'content', value: '' } });
    }

    return(
        <>
            {chat ? (
                <ul className={styles["chat-thread"]}>
                    {chat.messages.map((message)=> 
                    message.sender == user._id ?
                        (<li className={styles.sender} key={message._id}>{message.content}</li> )
                        :
                        (<li className={styles.reciever} key={message._id}>{message.content}</li> )
                    )}
                </ul>
            )
                : <p>No messages yet</p>
        }
          
            <form className={styles["chat-window"]} onSubmit={onSend}>
	            <input 
                    className={styles["chat-window-message"]} 
                    name="content" 
                    type="text" 
                    autoComplete="off" 
                    autoFocus 
                    value={values.content}
                    onChange={changeValues}
                    placeholder='Message...'/>
                    <button className={styles.send} onSubmit={onSend}>Send</button>
            </form>
        </>
    )
}