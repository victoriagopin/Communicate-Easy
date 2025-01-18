import styles from './Profile.module.css';
import { useNavigate, useParams} from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { post } from '../../api/requester';

export default function Profile() {
  const {ownerId} = useParams();
  const {user, profile, setProfile, setHasProfile} = useContext(UserContext);
  const navigate = useNavigate();

  const onEdit = () => {
    navigate(`/edit/${user._id}`)
  }

  const onDelete = async () => {
    try{
      setProfile({});
      setHasProfile(false);
      navigate('/');
      await post('delete-profile', profile);
    } catch (err){
      console.log(err.message);
    }
  }

    return (
      <div className="container">
        <div className="profile">
          <div className="card" data-state="#about">
            <div className="card-header">
              <div
                className="card-cover"
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
            <div className="card-main">
              <div className="card-section is-active" id="about">
                <div className="card-content">
                  <div className="card-subtitle">ABOUT</div>
                  <p className="card-desc">
                    {profile.about || ''}
                  </p>
                </div>
              </div>
            </div>
            <div className="card-buttons">
              {user?._id == ownerId ?  
              <>
              <button data-section="#about" className={`${styles.edit}`} onClick={onEdit}>
                  Edit
                </button> 
                <button className={styles.delete} onClick={onDelete}>Delete profile</button>
                </> :
                 <button data-section="#about" className="is-active">
                 Click to send a message!
               </button>
                }
               
              </div>
          </div>
        </div>
      </div>
    );
  }
  