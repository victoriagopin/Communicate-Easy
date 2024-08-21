import { Link, useParams } from "react-router-dom";
import { useGetProfile } from "../../hooks/useGetProfile";
import { useEffect } from "react";

export default function Profile() {
    const {id} = useParams();
    console.log(id);
    const {profile} = useGetProfile(id);

    console.log(profile);
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
              <h1 className="card-fullname">William Rocheald</h1>
              <h2 className="card-jobtitle">UI Developer</h2>
              <h2 className="card-age">Age: 24</h2>
            </div>
            <div className="card-main">
              <div className="card-section is-active" id="about">
                <div className="card-content">
                  <div className="card-subtitle">ABOUT</div>
                  <p className="card-desc">
                    Whatever tattooed stumptown art party sriracha gentrify hashtag
                    intelligentsia readymade schlitz brooklyn disrupt.
                  </p>
                </div>
              </div>
            <button className="edit"><Link to="/edit">Edit</Link></button>
            </div>
            <div className="card-buttons">
                <button data-section="#about" className="is-active">
                  Click to send a message!
                </button>
              </div>
          </div>
        </div>
      </div>
    );
  }
  