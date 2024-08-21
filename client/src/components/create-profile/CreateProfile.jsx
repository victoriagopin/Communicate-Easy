import { useContext } from "react";
import { post } from "../../api/requester";
import { useForm } from "../../hooks/useForm"
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const initialValues = {
    fullName: '',
    occupation: '',
    age: '',
    about: '',
}

export default function CreateProfile(){
    const {user} = useContext(UserContext);
    const {values, changeValues} = useForm(initialValues);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        try{
            const res = await post('create-profile', values, {'x-user-id' : user._id});
            console.log(res);
            navigate(`/profile/${res._id}`);
        } catch (error){
            console.log(error.message);
        }
    } 

    return (
        <div className="container">
		
        <div className="col-lg-8 col-lg-offset-2 mt">
            <form action="POST" onSubmit={submitHandler}>
                <h2 className="heading">Create Your Profile</h2>
                {/* {hasError && <p className="error">{hasError}</p>} */}
                <div className="group">      
                  <input type="text" name="fullName" value={values.fullName} onChange={changeValues}/>
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Full Name</label>
                </div>
                  
                <div className="group">      
                  <input type="text" name="occupation" value={values.occupation} onChange={changeValues}/>
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Occupation</label>
                </div>

                <div className="group">      
                  <input type="text" name="age" value={values.age} onChange={changeValues}/>
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Age</label>
                </div>

                <div className="group">      
                  <input type="text" name="about" value={values.about} onChange={changeValues}/>
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>About You</label>
                </div>
                <p className="mt"><button type="submit" className="btn btn-cta btn-lg">Create Profile</button></p>
              </form>
        </div>
</div>
    )
}