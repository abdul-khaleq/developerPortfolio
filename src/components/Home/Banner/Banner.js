import { Avatar, CardMedia, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { makeStyles } from '@mui/styles';
import Typewriter from 'typewriter-effect';
import image from '../../../image/IMG_20210514_090804.jpg';
const useStyles = makeStyles({
    resume: {
        padding: '7px 10px',
        alignItems: 'center',
        color: 'white',
        backgroundColor: '#FFC300',
        borderRadius: '10px',
        "&:hover": {
            backgroundColor: '#6495ED',
            fontSize: '1.2rem'

        },
    },

});
const Banner = () => {
    const classes = useStyles();
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
    return (
        <Box sx={{ width: '100%', bgcolor: '#D7DEE5', display: 'flex', alignItems: 'center', py: 10 }}>
            <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Grid
                    data-aos="fade-down"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    item xs={12} sm={6}>
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
                    <Link className={classes.resume} href="https://doc-0o-24-apps-viewer.googleusercontent.com/viewer/secure/pdf/mmlpnie4300h6lvlp6dkipknbkh2457d/v8j8nccb8fr7ohcbqi61kfp9ggb4g233/1638203250000/drive/02760148408141782934/ACFrOgCdiYL0bFyYnjHsZCtuRK9td3WOi-FeWa2HVpQd0o4YqVBJ3pboY4Wvl2OQW6fzxWueEr7ZHsf4tLjASESOIEnbsPnfDuhSLbW9nIoGuLsBnQO3GI_eLt2F7aiItiTNLxbBvff_P6tqzNjx?print=true&nonce=lmgada1e563e6&user=02760148408141782934&hash=h2pcusndu09pvdlsg21165vfv38inc74" variant="h6" underline="none">
                        Download Resume
                    </Link>
                </Grid>
                <Grid
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
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