import { useContext } from 'react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

export default function Header(){
	const {user, hasProfile, setUser, setHasProfile, setProfile} = useContext(UserContext);
	const navigate = useNavigate();

	const logOut = () => {
		setUser(null);
		setHasProfile(false);
		setProfile({});
		localStorage.clear();
		setTimeout(() => {
			navigate('/');
		}, 0);
	}

    return (
        
    <div id="headerwrap">
		<Link to="/" className="header main">CommunicateEasy</Link>
		{user ? (
			<>
			    <Link className="header" onClick={logOut}>Log Out</Link>
				<Link to="/communicate-now" className="header">Communicate Now</Link>
				{hasProfile ? 
					<>
					<Link to={`/profile/${user._id}`} className="header">Profile</Link>
					<Link to={'/my-chats'} className="header">My Chats</Link>
					</>
					: 	
					<Link to="/create-profile" className="header">Create Profile</Link>}
				
			</>
			) : (
			<>
				<Link to="/register" className="header">Register</Link>
				<Link to="login" className="header">Log In</Link>
			</>)
		}
		
	</div>
    )
}