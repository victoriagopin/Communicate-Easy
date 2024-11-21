import {  useNavigate, useParams } from "react-router-dom";
import { useGetProfile } from "../../hooks/useGetProfile";
import { post } from "../../api/requester";

export default function EditProfile(){
    const {id} = useParams();
    const {profile, setProfile} = useGetProfile(id);
    const navigate = useNavigate();

    const handleChange = (e) => {
      const {name, value} = e.target;
      setProfile((prevProfile) => ({
        ...prevProfile,
        [name] : value
      }))
    }

    const handleSubmit = async (e) => {
      e.preventDefault();

      try{
        await post('edit', profile);
        navigate(`/profile/${id}`)
      } catch (err){
        console.log(err.message);
      }
    }

    return (
      <div className="container">
  
      <div className="col-lg-8 col-lg-offset-2 mt">
          <form action="POST" onSubmit={handleSubmit}>
              <h2 className="heading">Edit Your Profile</h2>
              <div className="group">      
                <input type="text" name="fullName" value={profile.fullName || ''} onChange={handleChange}/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Full Name</label>
              </div>
                
              <div className="group">      
                <input type="text" name="occupation" value={profile.occupation || ''} onChange={handleChange}/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Occupation</label>
              </div>

              <div className="group">      
                <input type="text" name="age" value={profile.age || ''} onChange={handleChange}/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Age</label>
              </div>

              <div className="group">      
                <input type="text" name="about" value={profile.about || ''} onChange={handleChange}/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>About You</label>
              </div>
              <p className="mt"><button type="submit" className="btn btn-cta btn-lg">Edit Profile</button></p>
            </form>
      </div>
</div>
  )
}