import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { post } from "../../api/requester";

const initialValues = {
	email: '',
	password: '',
  rePass: ''
}

export default function Register(){
  const {values, changeValues} = useForm(initialValues);
  const navigate = useNavigate();

	const submitHandler = async (e) => {
		e.preventDefault();

    try{
      const res = await post('register', values);

      if(res){
        navigate('/');
      } else {
        console.log('Email already exists');
      }
    } catch (error){
      console.log(error.message);
    }
	}

    return (
        <div className="container">
		
        <div className="col-lg-8 col-lg-offset-2 mt">
            <form action="POST" onSubmit={submitHandler}>
                <h2 className="heading">Register</h2>
                <div className="group">      
                  <input type="text" name="email" value={values.email} onChange={changeValues}/>
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Email</label>
                </div>
                  
                <div className="group">      
                  <input type="password" name="password" value={values.password} onChange={changeValues}/>
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Password</label>
                </div>

                <div className="group">      
                  <input type="password" name="rePass" value={values.rePass} onChange={changeValues}/>
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Repeat Password</label>
                </div>
                <p className="mt"><button type="submit" className="btn btn-cta btn-lg">Register</button></p>
              </form>
        </div>
</div>
    )
}