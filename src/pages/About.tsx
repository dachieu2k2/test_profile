import { Box, Grid, Grow, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
    return (
        <>
            <Helmet>
                <title> PĐH - About </title>
            </Helmet>
            <Grid container display="flex" alignItems={'center'} height={'100vh'} py={2}>
                <Grid
                    item
                    display={'flex'}
                    flex={0.5}
                    position={'relative'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    xs={12}
                    md={6}
                >
                    <Grow in={true} style={{ transformOrigin: 'center center center' }} timeout={1000}>
                        <Box
                            sx={{
                                backgroundColor: '#EC994B',
                                width: '300px',
                                height: '300px',
                                position: 'absolute',
                                borderRadius: '30%',
                                transition: '1s all',
                                animation: `spin
              7s linear infinite`,
                                top: 'calc(50% - 100px)',
                                left: 'calc(50% - 200px)',
                                boxShadow: '5px 5px 50px #EC994B',
                            }}
                        ></Box>
                    </Grow>
                    <Grow in={true} style={{ transformOrigin: 'center center center' }} timeout={1200}>
                        <Box
                            sx={{
                                backgroundColor: '#f6d365',
                                opacity: 0.7,
                                width: '300px',
                                height: '300px',
                                position: 'absolute',
                                borderRadius: '30%',
                                transition: '1s all',
                                animation: `spin
              7s 1s linear infinite`,
                                top: 'calc(50% - 100px)',
                                left: 'calc(50% - 200px)',
                            }}
                        ></Box>
                    </Grow>
                    <Grow in={true} style={{ transformOrigin: 'center center center' }} timeout={500}>
                        <Box zIndex={2}>
                            <img src="./IMG_8581 1.png" loading="lazy" width={'80%'} style={{ borderRadius: '40%' }} />
                        </Box>
                    </Grow>
                </Grid>
                <Grid
                    item
                    display={'flex'}
                    flex={0.5}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    width={'100%'}
                    pl={15}
                    xs={12}
                    md={6}
                >
                    <Typography variant="h3" gutterBottom color={'#EC994B'}>
                        About me,
                    </Typography>
                    <Typography variant="h6" gutterBottom color={'#ffffff87'}>
                        I am a <span style={{ color: 'white', textDecoration: 'underline' }}>simple guys</span>, and{' '}
                        <span style={{ color: 'white', textDecoration: 'underline' }}>sunflowers</span>
                        's my favorite flower! .
                    </Typography>
                    <Typography variant="h6" gutterBottom color={'#ffffff87'}>
                        I believe that with continued effort and learning, I will soon achieve my dream, becoming an
                        experienced and successful{' '}
                        <span style={{ color: 'white', textDecoration: 'underline' }}>Project Manager</span> in my field
                        of work.
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default Profile;
