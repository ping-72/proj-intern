import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

const LaunchInfo = () => {
     return (
          <div className='max-w-5xl mx-auto my-8 border-none '>
               <Paper className="p-4">
                    <Box className="mb-4">
                         <div className='text-left px-10'>
                              <Typography variant="h6" color="textPrimary">
                                   About this launch
                              </Typography>
                         </div>
                         <div className='text-left py-7 px-10 !text-xl '>
                              <Typography variant="body2" color="textSecondary">
                                   VideoDubber - Fast Video Translator was hunted by{' '}
                                   <a href="#" className="text-blue-600">Souvic Chakraborty</a> in{' '}
                                   <a href="#" className="text-blue-600">Languages</a>,{' '}
                                   <a href="#" className="text-blue-600">Artificial Intelligence</a>,{' '}
                                   <a href="#" className="text-blue-600">Video</a>. Made by{' '}
                                   <a href="#" className="text-blue-600">Souvic Chakraborty</a>. Posted on August 6th, 2024.
                              </Typography>
                         </div>
                    </Box>
                    <Box className="flex justify-between h-12 px-10">
                         <Box className="text-center items-center border-r py-5 w-screen">
                              <Typography variant="body2" color="textSecondary">
                                   Upvotes
                              </Typography>
                              <Typography variant="h6" color="textPrimary">
                                   112
                              </Typography>

                         </Box>
                         <Box className="text-center border-r py-5 w-screen">
                              <Typography variant="body2" color="textSecondary">
                                   Comments
                              </Typography>
                              <Typography variant="h6" color="textPrimary">
                                   5
                              </Typography>

                         </Box>
                         <Box className="text-center border-r py-5 w-screen">
                              <Typography variant="body2" color="textSecondary">
                                   Day rank
                              </Typography>
                              <Typography variant="h6" color="textPrimary">
                                   -
                              </Typography>

                         </Box>
                         <Box className="text-center border-r py-5 w-screen">
                              <Typography variant="body2" color="textSecondary">
                                   Week rank
                              </Typography>
                              <Typography variant="h6" color="textPrimary">
                                   -
                              </Typography>

                         </Box>
                    </Box>
                    <button className='hover:text-blue-600 mt-7'> Report</button>
               </Paper>
          </div>
     );
};

export default LaunchInfo;
