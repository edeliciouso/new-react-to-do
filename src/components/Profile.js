import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

const Profile = () => {
    const { currentUser, logout } = useAuth();
    const history = useNavigate()

    const handleLogout = async () => {
        try {
            await logout();
            // Redirect the user to the login page after logging out
            history.push('/login');
        } catch (error) {
            console.error('Error logging out:', error.message);
        }
    };

    return (
        <div className="container mx-auto mt-10">
            <h2 className="text-2xl font-semibold mb-4">Profile Page</h2>
            {currentUser && (
                <div className="bg-gray-200 p-4 rounded-lg">
                    <p>Email: {currentUser.email}</p>
                    {/* You can display additional user information here */}
                    <Link to="/app" className="text-blue-500 hover:underline mt-2 block">Back to Homepage</Link>
                    <button onClick={handleLogout} className="text-red-500 hover:underline mt-2 block">Logout</button>
                </div>
            )}
        </div>
    );
};

export default Profile;
