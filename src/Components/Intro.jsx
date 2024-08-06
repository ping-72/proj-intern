import React, { useState } from 'react';
import { Image } from '@mui/icons-material';
import { AppBar, Toolbar, Typography, Button, Paper, Box, Avatar, Link } from '@mui/material';

const Intro = () => {
     const [count, setCount] = useState(0);
     const increasecnt = () => {
          setCount(count + 1);
     }
     return (
          <Box className="p-4 bg-white max-w-5xl mx-auto my-8 rounded-lg">
               <div className='pt-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-emoji-smile-upside-down-fill" viewBox="0 0 16 16">
                         <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M7 9.5C7 8.672 6.552 8 6 8s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5M4.285 6.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 4.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 3.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M10 8c-.552 0-1 .672-1 1.5s.448 1.5 1 1.5 1-.672 1-1.5S10.552 8 10 8" />
                    </svg>
                    <image src="../../public/logo512.png" alt="Logo" className="mr-2" />


               </div>
               <Box className="flex items-start mb-1">

                    <div>
                         <Typography variant="h5" className="font-semibold">
                              <div className='text-4xl font-semibold text-left'>
                                   VideoDubber - Fast  Video Translator
                              </div>
                         </Typography>
                    </div>
               </Box>
               <Typography variant="body1" className="text-gray-700 mb-2">
                    <div className=' flex text-2xl justify-between h-14 font-thin text-slate-400 text-left mb-5'>
                         Translate videos in your own voice, globalize in a click!
                         <Box className="flex items-center mb-4">
                              <div className='flex justify-between'>
                                   <button className='flex  items-center text-black border rounded-lg px-9 mr-3 '>
                                        <span className='px-2'>
                                             Visit
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                             <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                        </svg>
                                   </button>
                                   <button onClick={increasecnt}
                                        className='flex items-center text-white h-14 border rounded-lg px-14 bg-orange-400'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                                             <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                                        </svg>
                                        <span className='px-2'>
                                             Upvote
                                        </span>
                                        {count}</button>
                              </div>
                         </Box>
                    </div>
               </Typography>
               <Box className="flex justify-between items-center mb-4">
                    <div className='mr-4'>
                         <Typography variant="body2" className="text-red-500 mr-2">🎁 2 months free annually</Typography>
                    </div>
                    <div className='flex items-center text-black '>
                         <Typography variant="body2" className="text-gray-500">• <span className='px-3 text-lg'> Free Options</span></Typography>

                         <button className='flex items-center mx-4 hover:text-orange-400'>
                              {/* chat */}
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" classname="bi bi-chat-left" viewBox="0 0 16 16">
                                   <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                              </svg> <span className='px-3 text-lg'>Discuss</span>
                         </button>
                         <button className='flex items-center hover:text-orange-400 mx-4'>
                              {/* bookmark */}
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
                                   <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                              </svg>
                              <span className='px-3 text-lg'>Collect</span>
                         </button>
                         <button className='flex items-center hover:text-orange-400 mx-4'>
                              {/* share */}
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                                   <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                              </svg>
                              <span className='px-3 text-lg'>Share</span>
                         </button>
                         <button className='flex hover:text-orange-400 items-center mx-4'>
                              {/* graph */}
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-bar-graph" viewBox="0 0 16 16">
                                   <path d="M4.5 12a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5zm3 0a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5zm3 0a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5z" />
                                   <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1" />
                              </svg>
                              <span className='px-3 text-lg'>Stats</span>
                         </button>


                    </div>
               </Box>


               <div>
                    <Typography variant="body2" className="text-gray-700 mb-4 text-left text-lg">
                         <div className='text-lg'>
                              Translate video in one click with AI to 150+ languages & accents in original voice. Prime features:
                              1. 0.1 USD/min for premium video translation with voice cloning
                              2. Unlimited Editing
                              3. Exports MP4/SRT/MP3
                         </div>
                    </Typography>
               </div>
               <div className='py-5'>
                    <Box className="flex flex-wrap mb-4">
                         <span className='pr-4 text-slate-500 font-semibold'>
                              Launched in
                         </span>
                         {['Languages', 'Artificial Intelligence', 'Video'].map((tag) => (
                              <Box key={tag} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                   {tag}
                              </Box>
                         ))}
                    </Box>
               </div>



          </Box>
     );
};

export default Intro;
