import React from 'react';
import { Box, Typography, Grid, Paper, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

const launches = [
     { name: 'Upmetrics AI', description: 'Business Plan & Financial Forecast using AI', logo: '../../public/logo192.png' },
     { name: 'Me.bot', description: 'Turn your ideas into an AI life coach', logo: 'path/to/logo2.png' },
     { name: 'Codei AI', description: 'Land Your Dream Software Job', logo: 'path/to/logo3.png' },
     { name: 'Minvo 2.0', description: 'All-in-one AI video shorts platform for podcasts & more', logo: 'path/to/logo4.png' },
     { name: 'Frontend AI', description: 'Your UI code generated from prompts or images', logo: 'path/to/logo5.png' },
     { name: 'Dayzero Worx', description: 'Expert AI teams for marketing agencies', logo: 'path/to/logo6.png' },
     { name: 'TarotRead AI', description: 'Ditch the crystal ball – this is the future', logo: 'path/to/logo7.png' },
     { name: 'Brainybear.ai', description: 'Train AI chatbots in 3 clicks and help customers instantly', logo: 'path/to/logo8.png' },
     { name: 'Lancey (YC S22)', description: 'Build features your users want', logo: 'path/to/logo9.png' },
     { name: "I'M SAFE", description: 'Women’s safety app for real-time security', logo: 'path/to/logo10.png' },
];

const LaunchCard = styled(Paper)(({ theme }) => ({
     display: 'flex',
     alignItems: 'center',
     padding: theme.spacing(2),
     marginBottom: theme.spacing(2),
}));

const TrendingLaunches = () => {
     return (
          <div className='border-none'>
               <Box className="max-w-5xl mx-auto my-10">
                    <div className='py-3'>
                         <Typography variant="h6" gutterBottom>
                              Trending launches
                         </Typography>
                    </div>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                         {launches.map((launch, index) => (
                              <Grid item xs={2} sm={4} md={4} key={index}>
                                   <LaunchCard elevation={3}>
                                        <Avatar src={launch.logo} alt={launch.name} className="!bg-blue-200 mr-4" />
                                        <Box>
                                             <div className='text-left'>
                                                  <Typography variant="body1" fontWeight="bold">
                                                       {launch.name}
                                                  </Typography>
                                                  <Typography variant="body2" color="textSecondary">
                                                       <div className='text-base'>
                                                            {launch.description}
                                                       </div>
                                                  </Typography></div>
                                        </Box>
                                   </LaunchCard>
                              </Grid>
                         ))}
                    </Grid>
               </Box>
          </div>
     );
};

export default TrendingLaunches;
