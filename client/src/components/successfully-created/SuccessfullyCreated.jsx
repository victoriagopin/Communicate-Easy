import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { Link } from "react-router-dom";

export default function SuccessfullyCreated(){
    const {user} = useContext(UserContext);
    return (
        <div className="container">

        <div className="home">
            <h1 className="welcome">{`Dear ${user.email}, you have successfully created your profile!`}</h1>
            <p className="para">See your <Link to='/profile'>Profile!</Link></p>
        </div>   

    </div>
    )
}