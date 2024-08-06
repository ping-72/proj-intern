import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {

     return (
          <div className="flex items-center justify-between p-2 pr-7 h-20  bg-white shadow-md">
               <div className="flex items-center  space-x-2">
                    <div className="bg-red-500 mx-7 p-4 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">
                         P
                    </div>
                    <div className="relative">
                         <input
                              type="text"
                              placeholder="Search ( ctrl + k )"
                              className="pl-10 pr-4 py-1 h-9 rounded-full bg-blue-50 focus:outline-none"
                         />
                         <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                              <svg
                                   className="w-4 h-4"
                                   fill="none"
                                   stroke="currentColor"
                                   viewBox="0 0 24 24"
                                   xmlns="http://www.w3.org/2000/svg"
                              >
                                   <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                   />
                              </svg>
                         </div>
                    </div>
               </div>
               <div className="flex items-center text-xl space-x-4">
                    <a href="#" className="text-gray-700 hover:text-red-500 px-4 ">
                         Launches
                    </a>
                    <a href="#" className="text-gray-700 hover:text-red-500  px-4">
                         Products
                    </a>
                    <a href="#" className="text-gray-700 hover:text-red-500  px-4">
                         News
                    </a>
                    <a href="#" className="text-gray-700 hover:text-red-500 ">
                         Community
                    </a>
                    <a href="#" className="text-gray-700 hover:text-red-500 ">
                         Advertise
                    </a>
               </div>
               <div className="flex items-center space-x-4">
                    <button className="bg-red-100 text-red-500 px-4 py-1 rounded-full hover:bg-red-200">
                         Submit
                    </button>
                    <IconButton>
                         <NotificationsIcon />
                    </IconButton>
                    <button><Avatar src="https://i.pravatar.cc/150?img=3" alt="User" /></button>
               </div>
          </div>
     );
};

export default Navbar;
