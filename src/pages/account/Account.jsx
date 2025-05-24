import { useLocation } from 'react-router-dom';
import profileImage from '../../assets/profile.png';
import cameraImage from '../../assets/camera.png';
import './account.css'

const AccountPage = () => {
const location = useLocation();
const user = location.state;

 return(
     <div className="main-account-container">
        <div className="account-container">
            <div className="nav-space">
                Account Settings
            </div>
            <div className="info-container">
                 <div className="user-info">
                <div className="profile">
                   <img className="profile-img" src={profileImage} />
                   <img  className="camera-img" src={cameraImage} />    
                </div>
                <div className="profile-info">
                 <div className='profile-name'>{user.fullName}</div>
                 <div className='profile-email'>{user.email}</div>
                </div>
            </div>
            <div className="about">
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam 
            </div>
            </div>
           
        </div>
     </div>
    )
}

export default AccountPage;