import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

export default function Header(){
	const {user, hasProfile} = useContext(UserContext);
    return (
        
    <div id="headerwrap">
		<Link to="/" className="header main">CommunicateEasy</Link>
		{user ? (
			<>
			    <Link className="header">Log Out</Link>
				{hasProfile ? 
					<Link to={`/profile/${user._id}`} className="header">Profile</Link>
					: 	
					<Link to="/create-profile" className="header">Create Profile</Link>}
				
			</>
			) : (
			<>
				<Link to="/register" className="header">Register</Link>
				<Link to="login" className="header">Log In</Link>
			</>)
		}
		<Link to="/communicate-now" className="header">Communicate Now</Link>
	</div>
    )
}