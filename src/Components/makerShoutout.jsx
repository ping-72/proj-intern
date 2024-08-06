import React from 'react';
import { Box, Typography, Avatar, Stack, IconButton, Grid } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';

// Sample data
const shoutouts = [
     {
          name: 'Stripe',
          description: 'Financial infrastructure for the internet',
          quote: 'Stripe helped VideoDubber to set up payments easily.',
          logo: 'https://logo.clearbit.com/stripe.com',
     },
     {
          name: 'Mantine',
          description: 'React components library with native dark theme support',
          quote: 'This fantastic component library helps VideoDubber ship UI code faster.',
          logo: 'https://logo.clearbit.com/mantine.dev',
     },
     {
          name: 'PyTorch',
          description: 'Machine learning library based on the Torch library',
          quote: 'Pytorch helped VideoDubber to write better voice cloning models.',
          logo: 'https://logo.clearbit.com/pytorch.org',
     },
];

const MakerShoutouts = () => {
     const [expanded, setExpanded] = React.useState(true);

     const handleToggle = () => {
          setExpanded(!expanded);
     };

     return (
          <div className=" max-w-5xl mx-auto my-8 px-12 mt-4 border border-gray-300 rounded-lg p-4  mx-96 bg-white shadow-md">
               <div className="flex justify-between">
                    <div className='text-left'>
                         <Typography variant="h6" className="font-bold">
                              Maker Shoutouts
                         </Typography>
                         <Typography variant="body2" className="mb-2 ">
                              <div className='text-xl text-slate-500'>
                                   We couldn't have built this without...
                              </div>
                         </Typography>
                    </div>

                    <div className='flex justify-between'>
                         {shoutouts.map((shoutout, index) => (
                              <div key={index} className="flex items-center space-x-4">
                                   <div className='px-2'>
                                        <Avatar
                                             src={shoutout.logo}
                                             alt={shoutout.name}
                                             className="  w-10 h-10"
                                        />
                                   </div>

                              </div>
                         ))}
                    </div>

                    <button className='text-red-400 border shadow-sm rounded-lg px-3 py-0 font-semibold' onClick={handleToggle}>Show {expanded ? "less" : "more"} <IconButton  >
                         {expanded ? <ExpandLess /> : <ExpandMore />}
                    </IconButton></button>

               </div>



               {expanded && (
                    <div>
                         <div className="py-5">
                              {shoutouts.map((shoutout, index) => (
                                   <div key={index} className="flex items-start items-center p-3">
                                        <Avatar
                                             src={shoutout.logo}
                                             alt={shoutout.name}
                                             className="w-10 h-10"
                                        />
                                        <div>
                                             <div className='flex items-center px-5 '>
                                                  <Typography variant="subtitle1" className="font-semibold">
                                                       {shoutout.name} -
                                                  </Typography>
                                                  <Typography variant="body2" className="text-gray-600">
                                                       {shoutout.description}
                                                  </Typography>



                                             </div>
                                             <div className='flex items-center px-5 '>
                                                  <Typography
                                                       variant="body2"
                                                       className="italic text-gray-600 mt-1"
                                                  >
                                                       <FormatQuoteRoundedIcon />{shoutout.quote}<FormatQuoteRoundedIcon />
                                                  </Typography>
                                             </div>
                                        </div>

                                   </div>
                              ))}
                         </div>
                    </div>
               )}
          </div>
     );
};

export default MakerShoutouts;
