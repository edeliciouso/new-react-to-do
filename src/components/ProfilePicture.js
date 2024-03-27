import React from 'react';
import profileImage from '../pfp.jpeg';
import '../App.css';

const ProfilePicture = () => {
  return (
        <div className="relative">
            <img src={profileImage} alt="profile" className="profile-picture" />
        </div>
  );
};

export default ProfilePicture;
