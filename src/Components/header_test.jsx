import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Menu, MenuItem, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';

const StyledMenu = styled((props) => (
     <Menu elevation={3} {...props} />
))(({ theme }) => ({
     '& .MuiPaper-root': {
          marginTop: theme.spacing(2),
          boxShadow: theme.shadows[3],
          borderRadius: theme.shape.borderRadius,

     },
}));

const Navbar1 = () => {
     const [anchorEl, setAnchorEl] = useState(null);

     const handleMenu = (event) => {
          setAnchorEl(event.currentTarget);
     };

     const handleClose = () => {
          setAnchorEl(null);
     };

     return (
          <div className='bg-white h-16'>
               <AppBar color="default" className="shadow-none">
                    <Toolbar className="flex justify-between bg-white">
                         <div className='bg-white'>
                              <div className="flex items-center space-x-2">
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
                         </div>
                         <Box className="flex space-x-4 text-center items-center">
                              <Typography
                                   className="hover:cursor-pointer"
                                   onMouseEnter={handleMenu}
                              >
                                   Launches
                              </Typography>
                              <Typography className="hover:cursor-pointer">Products</Typography>
                              <Typography className="hover:cursor-pointer">News</Typography>
                              <Typography className="hover:cursor-pointer">Community</Typography>
                              <Typography className="hover:cursor-pointer">Advertise</Typography>

                         </Box>
                         <div>
                              <div className="flex items-center space-x-4">
                                   <button className="bg-red-100 text-red-500 px-4 py-1 rounded-full hover:bg-red-200">
                                        Submit
                                   </button>
                                   <IconButton>
                                        <NotificationsIcon />
                                   </IconButton>
                                   <IconButton>
                                        <Avatar src="https://i.pravatar.cc/150?img=3" alt="User" />
                                   </IconButton>
                              </div>
                         </div>
                    </Toolbar>
                    <StyledMenu
                         id="menu-appbar"
                         anchorEl={anchorEl}
                         anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'left',
                         }}
                         keepMounted
                         transformOrigin={{
                              vertical: 'top',
                              horizontal: 'left',
                         }}
                         open={Boolean(anchorEl)}
                         onClose={handleClose}
                         MenuListProps={{
                              onMouseLeave: handleClose,
                         }}
                    >
                         <MenuItem onClick={handleClose}>
                              <Box className="flex flex-col">
                                   <Typography className="hover:cursor-pointer">Coming soon</Typography>
                                   <Typography className="text-sm text-gray-500">Upcoming launches to watch</Typography>
                              </Box>
                         </MenuItem>
                         <MenuItem onClick={handleClose}>
                              <Box className="flex flex-col">
                                   <Typography className="hover:cursor-pointer">Launch archive</Typography>
                                   <Typography className="text-sm text-gray-500">Most-loved launches by the community</Typography>
                              </Box>
                         </MenuItem>
                         <MenuItem onClick={handleClose}>
                              <Box className="flex flex-col">
                                   <Typography className="hover:cursor-pointer">Launch Guide</Typography>
                                   <Typography className="text-sm text-gray-500">Checklists and pro tips for launching</Typography>
                              </Box>
                         </MenuItem>
                    </StyledMenu>
               </AppBar>
          </div>
     );
};

export default Navbar1;
