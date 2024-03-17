import { Box, Button, Grid, Typography } from '@mui/material';
import { routes } from '../routes';
import { Link } from 'react-router-dom';

import VerticalAlignBottomOutlinedIcon from '@mui/icons-material/VerticalAlignBottomOutlined';

const Topbar = () => {
    return (
        <Grid
            container
            display="flex"
            justifyContent="space-between"
            alignItems={'center'}
            p={2}
            position={'fixed'}
            width={'80%'}
            left={'10%'}
            zIndex={3}
        >
            {/* SEARCH BAR */}
            <Grid item display={'flex'} component={Link} to={'/'}>
                <Box zIndex={2}>
                    <img src="./icon.png" loading="lazy" width={'56px'} style={{ borderRadius: '40%' }} />
                </Box>
            </Grid>
            <Grid item display="flex" columnGap={2} justifyContent={'center'} ml={2}>
                {routes.map((value, index) => (
                    <Typography
                        key={index}
                        variant="h6"
                        gutterBottom
                        color={'#EC994B'}
                        component={Link}
                        to={value.path}
                    >
                        {value.title}
                    </Typography>
                ))}
            </Grid>

            {/* ICONS */}
            <Grid item display="flex">
                <a href={'./PHẠM ĐẮC HIẾU.pdf'} download={'Phạm Đắc Hiếu.pdf'}>
                    <Button
                        variant="contained"
                        color="warning"
                        size="medium"
                        startIcon={<VerticalAlignBottomOutlinedIcon />}
                    >
                        Download my CV
                    </Button>
                </a>
            </Grid>
        </Grid>
    );
};

export default Topbar;
