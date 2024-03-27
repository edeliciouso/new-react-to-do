import React from 'react';
import profileImage from '../pfp.jpeg';
import '../ProfilePic.css';

const ProfilePictureToDo = () => {
  return (
        <div className="relative">
            <img src={profileImage} alt="profile" className="profile-picture" />
        </div>
  );
};

export default ProfilePictureToDo;