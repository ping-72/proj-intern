import React from 'react';
import { Avatar, Box, Typography, Paper, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const Comment = styled(Paper)(({ theme }) => ({
     padding: theme.spacing(2),
     marginBottom: theme.spacing(2),
}));

const CommentSection = () => {
     return (
          <Box className="max-w-5xl mx-auto my-8 ">
               <Comment elevation={1}>
                    <Box className="flex items-start space-x-4">
                         <Avatar src="/static/images/avatar/1.jpg" alt="Souvic Chakraborty" />
                         <div className='text-left'>
                              <Box >
                                   <div className='flex'>
                                        <Typography variant="body1" fontWeight="bold">
                                             Souvic Chakraborty
                                        </Typography>
                                        <div className='ml-2'>
                                             <Typography variant="body2" color="textSecondary" className="mb-2">
                                                  @souvic_chakraborty
                                             </Typography>
                                        </div>
                                   </div>
                                   <br />
                                   <Typography variant="body1">
                                        Hey Product Hunters! 👋
                                        <br />
                                        We're excited to launch VideoDubber.ai to the Product Hunt community! With VideoDubber.ai, you can translate your videos into 150+ languages & accents using advanced AI-powered voice cloning.
                                        <br /><br />
                                        Here's what you can do with VideoDubber.ai:
                                        <br />⚡ One-Click Translation: Easily translate and dub your videos without any hassle.
                                        <br />🗣 High-Quality Voice Cloning: Achieve natural and engaging voiceovers.
                                        <br />🌍 150+ Languages Supported: Reach a global audience effortlessly.
                                        <br />💸 Affordable Pricing: Best value for top-notch video translation.
                                        <br />👥 Unlimited Free Edits: Customize subtitles, timestamps, and more at no extra cost.
                                        <br /><br />
                                        Check out today for heavily discounted pricing and free trial minutes.
                                   </Typography>
                                   <Box className="flex items-center space-x-2 mt-2">
                                        <IconButton size="small">
                                             <ThumbUpAltOutlinedIcon fontSize="small" />
                                        </IconButton>
                                        <Typography variant="body2">
                                             <div className='pr-3'>3</div>
                                        </Typography>
                                        <IconButton size="small">
                                             <ReplyOutlinedIcon fontSize="small" />
                                        </IconButton>
                                        <IconButton size="small">
                                             <ShareOutlinedIcon fontSize="small" />
                                        </IconButton>

                                        <Typography variant="body2" color="textSecondary">5h</Typography>
                                   </Box>
                              </Box>
                         </div>
                    </Box>
               </Comment>
               <Comment elevation={1}>
                    <Box className="flex items-start space-x-4">
                         <Avatar src="/static/images/avatar/2.jpg" alt="Bishakh Ghosh" />
                         <div className='text-left'>
                              <Box>
                                   <div className='flex'>
                                        <Typography variant="body1" fontWeight="bold">
                                             Bishakh Ghosh                                        </Typography>
                                        <div className='ml-2'>
                                             <Typography variant="body2" color="textSecondary" className="mb-2">
                                                  @bishakh_ghosh
                                             </Typography>
                                        </div>
                                   </div>
                                   <Typography variant="body1" fontWeight="bold">

                                   </Typography>
                                   <Typography variant="body2" color="textSecondary" className="mb-2">
                                   </Typography>
                                   <Typography variant="body1">
                                        This would definitely save thousands of dollars of dubbing service fees. I think the voice selection is a game changer.
                                   </Typography>
                                   <Box className="flex items-center space-x-2 mt-2">
                                        <IconButton size="small">
                                             <ThumbUpAltOutlinedIcon fontSize="small" />
                                        </IconButton>
                                        <Typography variant="body2">
                                             <div className='pr-3'>4</div>
                                        </Typography>
                                        <IconButton size="small">
                                             <ReplyOutlinedIcon fontSize="small" />
                                        </IconButton>
                                        <IconButton size="small">
                                             <ShareOutlinedIcon fontSize="small" />
                                        </IconButton>

                                        <Typography variant="body2" color="textSecondary">2h</Typography>
                                   </Box>
                                   <Box className="ml-8 mt-2">
                                        <Box className="flex items-start space-x-4">
                                             <Avatar src="/static/images/avatar/1.jpg" alt="Souvic Chakraborty" />
                                             <Box>
                                                  <div className='flex'>
                                                       <Typography variant="body1" fontWeight="bold">
                                                            Souvic Chakraborty
                                                       </Typography>
                                                       <div className='ml-2'>
                                                            <Typography variant="body2" color="textSecondary" className="mb-2">
                                                                 @souvic_chakraborty
                                                            </Typography>
                                                       </div>
                                                  </div>
                                                  <Typography variant="body1">
                                                       @bishakh_ghosh Thanks for the insight. We will add more voices in the coming weekend.
                                                  </Typography>
                                             </Box>
                                        </Box>
                                   </Box>
                              </Box>
                         </div>
                    </Box>
               </Comment>
          </Box>
     );
};

export default CommentSection;
