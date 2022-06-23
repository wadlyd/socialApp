import React from 'react';
import './ProfileCard.css';
import Cover from '../../img/cover.jpg';
import Profile from '../../img/wdugue.PNG';


const ProfileCard = () => {
  return (
    <div className='ProfileCard'>
        <div className="ProfileImages">
            <img src={Profile} alt="" />
            <img src={Cover} alt="" />
        </div>

        <div className="ProfileName">
            <span>Wadly Dugue</span>
            <span>Front-End Developer with React.js</span>
        </div>

        <div className="followStatus">
            <hr />
            <div className='follow'>
                <span>6,890</span>
                <span>Followings</span>
            </div>
            <div className="vl"></div>
            <div className='follow'>
                <span>1</span>
                <span>Followers</span>
            </div>
            <hr />
        </div>

        <span>
            My Profile
        </span>
    
    </div>
  )
}

export default ProfileCard