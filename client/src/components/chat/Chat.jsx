import styles from './Chat.module.css'

export default function Chat(){
    return(
        <>
            <ul className={styles["chat-thread"]}>
	            <li>Are we meeting today?</li>
	            <li>yes, what time suits you?</li>
	            <li>I was thinking after lunch, I have a meeting in the morning</li>
            </ul>

            <form className={styles["chat-window"]}>
	            <input className={styles["chat-window-message"]} name="chat-window-message" type="text" autocomplete="off" autofocus placeholder='Message...'/>
            </form>
        </>
    )
}