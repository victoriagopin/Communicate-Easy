import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { post } from '../../api/requester';

const initialValues = {
	email: '',
	password: ''
}

export default function Login(){
	const {values, changeValues} = useForm(initialValues);
	const navigate = useNavigate();

	const submitHandler = async (e) => {
		e.preventDefault();

		try{
			const res = await post('login', values);
		
			if(res){
			navigate('/');
			} else {
			console.log('You do not have an account yet!');
			}
		} catch (error){
			console.log(error.message);
		}
	}

    return (
        <div className="container">
		
				<div className="col-lg-8 col-lg-offset-2 mt">
					<form action="POST" onSubmit={submitHandler}>
						<h2 className="heading">Log In</h2>
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
						<p className="mt"><button type="submit" className="btn btn-cta btn-lg">Login</button></p>
					  </form>
				</div>
    	</div>
    )
}