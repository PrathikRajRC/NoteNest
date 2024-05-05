import React from 'react';
import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ userInfo, onLogout }) => {
  return (
    userInfo && (
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 font-semibold text-md">
          {getInitials(userInfo?.fullName)}
        </div>
        
        <div className="flex flex-col">
          <p className="text-md font-medium text-gray-900">{userInfo.fullName}</p>
          <button 
            className="text-sm text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </div>
    )
  );
};

export default ProfileInfo;
