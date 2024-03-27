import React from 'react';
import profileImage from '../pfp.jpeg';
import '../Profile.css';

const ProfilePicture = () => {
  return (
        <div className="relative">
            <img src={profileImage} alt="profile" className="profile-picture-login" />
        </div>
  );
};

export default ProfilePicture;
