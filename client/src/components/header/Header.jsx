import {Link} from 'react-router-dom';

export default function Header(){
    return (
        
    <div id="headerwrap">
		<Link to="/" className="header main">CommunicateEasy</Link>
		<Link to="/profile" className="header">Profile</Link>
		<Link to="/register" className="header">Register</Link>
		<Link to="login" className="header">Log In</Link>
		<Link to="chat" className="header">Communicate Now</Link>
	</div>
    )
}