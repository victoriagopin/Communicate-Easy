import { useNavigate, useParams} from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useGetProfile } from "../../hooks/useGetProfile";

export default function Profile() {
  const {ownerId} = useParams();
  const {user} = useContext(UserContext);
  const {profile} = useGetProfile(ownerId);
  const navigate = useNavigate();

  const onChat = () => {
    navigate(`/chat/${ownerId}`)
  }

  const onEdit = () => {
    navigate(`/edit/${user._id}`)
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
              {user._id == ownerId ?   
              <button data-section="#about" className="is-active" onClick={onEdit}>
                  Edit
                </button> :
                 <button data-section="#about" className="is-active" onClick={onChat}>
                 Click to send a message!
               </button>
                }
               
              </div>
          </div>
        </div>
      </div>
    );
  }
  