import { Avatar, CardMedia, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { makeStyles } from '@mui/styles';
import Typewriter from 'typewriter-effect';
import image from '../../../image/IMG_20210514_090804.jpg';
const useStyles = makeStyles({
    resume: {
        padding: '10px 15px',
        alignItems: 'center',
        color: 'white',
        backgroundColor: '#FFC300',
        borderRadius: '10px',
        "&:hover": {
            backgroundColor: '#6495ED',

        },
    },

});
const Banner = () => {
    const classes = useStyles();
    return (
        <Box sx={{ width: '100%', height: '500px', bgcolor: '#D7DEE5', display: 'flex', alignItems: 'center' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h3" gutterBottom component="div">
                        I am Abdul Khaleq
                    </Typography>
                    <Typography variant="h4" gutterBottom component="div">
                        <Typewriter
                            options={{
                                strings: ['Web Developer', 'Web Designer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </Typography> <br />
                    <Link className={classes.resume} href="https://doc-0o-24-apps-viewer.googleusercontent.com/viewer/secure/pdf/mmlpnie4300h6lvlp6dkipknbkh2457d/v8j8nccb8fr7ohcbqi61kfp9ggb4g233/1638203250000/drive/02760148408141782934/ACFrOgCdiYL0bFyYnjHsZCtuRK9td3WOi-FeWa2HVpQd0o4YqVBJ3pboY4Wvl2OQW6fzxWueEr7ZHsf4tLjASESOIEnbsPnfDuhSLbW9nIoGuLsBnQO3GI_eLt2F7aiItiTNLxbBvff_P6tqzNjx?print=true&nonce=lmgada1e563e6&user=02760148408141782934&hash=h2pcusndu09pvdlsg21165vfv38inc74" variant="h4" underline="none">
                        Download Resume
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box>
                        <Avatar
                            alt="Remy Sharp"
                            src={image}
                            sx={{ width: 300, height: 300 }}
                        />
                    </Box>
                </Grid>
            </Grid>
            <br /><br /><br />
        </Box>
    );
};

export default Banner;