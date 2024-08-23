import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFoundUser(){
    return ( 
    <>  
        <div className={`${styles['big-emoticon']} ${styles['all-div']}`}>:(</div>
        <h1 className='heading'>
            Sad face.
         </h1>
        <div className={`${styles['content-description']} ${styles['all-div']}`}>
            I couldn't find a user connected to this full name.
        </div>
        <div className={`${styles['further-explanation']} ${styles['all-div']}`}>
           Make sure the full name you have entered is correct. It should be exact the same as the user has created it!
        </div>
        <div className={`${styles['further-explanation']} ${styles['all-div']}`}>
           Do you want to try again? <Link className={styles.redirect} to={'/communicate-now'} >Click here!</Link>
        </div>
    </> 
)
}