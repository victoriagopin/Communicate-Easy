import styles from './ProfileToChat.module.css';
import { useNavigate, useParams } from "react-router-dom";
import { useGetProfile } from "../../hooks/useGetProfile";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function ProfileToChat(){
    const {user} = useContext(UserContext);
    const {ownerId} = useParams();
    const {profile} = useGetProfile(ownerId);
    const navigate = useNavigate();

    const onChat = () => {
        navigate(`/chat/${profile.owner}`)
      }

    return (
      <div className="container">
        <div className="profile">
          <div className={styles.card} data-state="#about">
            <div className={styles["card-header"]}>
              <div
                className={styles["card-cover"]}
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')",
                }}
              ></div>
              <img
                className="card-avatar"
                src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                alt="avatar"
              />
              <h1 className="card-fullname">{profile.fullName || ''}</h1>
              <h2 className="card-jobtitle">{profile.occupation || ''}</h2>
              <h2 className="card-age">Age: {profile.age || ''}</h2>
            </div>
            <div className={styles["card-main"]}>
              <div className="card-section is-active" id="about">
                <div className="card-content">
                  <div className="card-subtitle">ABOUT</div>
                  <p className="card-desc">
                    {profile.about || ''}
                  </p>
                </div>
                <button data-section="#about" className={styles.click} onClick={onChat}>
                 Click to send a message!
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }