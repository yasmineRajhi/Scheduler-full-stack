import React, { useState } from 'react';
import logo from '../../assets/logo.jpeg';

function Profile() {
  const [firstName, setFirstName] = useState('First Name');
  const [lastName, setLastName] = useState('Last Name');
  const [email, setEmail] = useState('email@example.com');

  const handleChange = () => {
    
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 space-y-6 max-w-md">
        <div className="flex justify-center">
          <img className="h-32 w-32 rounded-full border-4 border-blue-500" src={logo} alt="Profile Picture" />
        </div>
        <div className="space-y-4">
          <input
            className="text-gray-600 text-center bg-gray-100 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            disabled
          />
          <input
            className="text-gray-600 text-center bg-gray-100 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            disabled
          />
          <input
            className="text-gray-600 text-center bg-gray-100 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            disabled
          />
        </div>
        <div className='flex justify-center items-center'>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Reset Password
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md hover:bg-blue-600 transition duration-300">
          Update profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
