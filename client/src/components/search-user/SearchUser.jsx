import { useContext, useState } from "react";
import { get } from "../../api/requester";
import { useForm } from "../../hooks/useForm"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export default function SearchUser(){
    const {values, changeValues} = useForm({search: ''});
    const {profile} = useContext(UserContext);
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const submitHandler =async  (e) => {
        e.preventDefault();

        setError(false);

        if(profile.fullName == values.search){
           setError(true);
           return;
        }

        try{
            const res = await get(`search?fullName=${encodeURIComponent(values.search)}`);
            if(!res){
                navigate('/not-found');
            } else {
                navigate(`/profile/${res.owner}`);
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div className="container">
    <section className="webdesigntuts-workshop">
    <div className="col-lg-8 col-lg-offset-2 mt">
        <h2 className="search-heading">Type the FULL NAME of the person you want to start a chat with:</h2>
        </div>
	    <form method="GET" onSubmit={submitHandler}>		    
		    <input type="search" name="search" placeholder="Full Name of the user" value={values.search} onChange={changeValues}/>		    	
		    <button type="submit" onSubmit={submitHandler}>Search</button>
	    </form>

        {error &&  <div>
            <p className="error">Can not start chat with yourslef!</p>
        </div>}

    </section>
    </div>
    )
}