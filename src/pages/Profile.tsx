import { Box, Button, Grid, Grow, IconButton, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';

const Profile = () => {
    return (
        <>
            <Helmet>
                <title> PĐH - Profile </title>
            </Helmet>
            <Grid container display="flex" alignItems={'center'} height={'100vh'} py={2}>
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
                        Hi there,
                    </Typography>
                    <Typography variant="h3" gutterBottom color={'#EC994B'}>
                        I’m <span style={{ color: 'white' }}>Dac Hieu</span>
                    </Typography>
                    <Typography variant="h6" gutterBottom color={'#ffffff87'}>
                        I am a <span style={{ color: 'white', textDecoration: 'underline' }}>designer</span>, and also a{' '}
                        <span style={{ color: 'white', textDecoration: 'underline' }}>developer</span>.
                    </Typography>
                    <Box my={2}>
                        <a href="https://www.facebook.com/hieu.hiihihaha/" target="_blank">
                            <IconButton aria-label="add an alarm" sx={{ color: 'white' }}>
                                <FacebookOutlinedIcon fontSize="large" color="inherit" />
                            </IconButton>
                        </a>
                        <a href="https://github.com/dachieu2k2" target="_blank">
                            <IconButton aria-label="add an alarm" sx={{ color: 'white' }}>
                                <GitHubIcon fontSize="large" color="inherit" />
                            </IconButton>
                        </a>
                        <a href="https://www.instagram.com/dhieu.hiha/" target="_blank">
                            <IconButton aria-label="add an alarm" sx={{ color: 'white' }}>
                                <InstagramIcon fontSize="large" />
                            </IconButton>
                        </a>
                        <a href="https://twitter.com/hihihaha37" target="_blank">
                            <IconButton aria-label="add an alarm" sx={{ color: 'white' }}>
                                <XIcon fontSize="large" color="inherit" />
                            </IconButton>
                        </a>
                    </Box>
                    <Box mt={3}>
                        <a href="mailto:developerworking7@gmail.com">
                            <Button
                                variant="contained"
                                sx={{ bgcolor: '#EC994B', ':hover': { bgcolor: '#f17b0b' } }}
                                size="large"
                                startIcon={<AttachEmailIcon />}
                            >
                                Contact me
                            </Button>
                        </a>
                    </Box>
                </Grid>
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
                                borderRadius: '50%',
                                transition: '1s all',
                                animation: `morphing
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
                                borderRadius: '50%',
                                transition: '1s all',
                                animation: `morphing
              7s 2s linear infinite`,
                                top: 'calc(50% - 100px)',
                                left: 'calc(50% - 200px)',
                            }}
                        ></Box>
                    </Grow>
                    <Grow in={true} style={{ transformOrigin: 'center center center' }} timeout={500}>
                        <Box zIndex={2}>
                            <img src="./IMG_8576 1.png" loading="lazy" width={'80%'} style={{ borderRadius: '40%' }} />
                        </Box>
                    </Grow>
                </Grid>
            </Grid>
        </>
    );
};

export default Profile;
