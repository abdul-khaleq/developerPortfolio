import { Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Typography variant="h3" gutterBottom component="div">
                        I am Abdul Khaleq
                    </Typography>
                    <Typography variant="h4" gutterBottom component="div">
                        <Typewriter
                            options={{
                                strings: ['Web Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </Typography>
                    <Link href="https://doc-0o-24-apps-viewer.googleusercontent.com/viewer/secure/pdf/mmlpnie4300h6lvlp6dkipknbkh2457d/v8j8nccb8fr7ohcbqi61kfp9ggb4g233/1638203250000/drive/02760148408141782934/ACFrOgCdiYL0bFyYnjHsZCtuRK9td3WOi-FeWa2HVpQd0o4YqVBJ3pboY4Wvl2OQW6fzxWueEr7ZHsf4tLjASESOIEnbsPnfDuhSLbW9nIoGuLsBnQO3GI_eLt2F7aiItiTNLxbBvff_P6tqzNjx?print=true&nonce=lmgada1e563e6&user=02760148408141782934&hash=h2pcusndu09pvdlsg21165vfv38inc74" variant="body2">
                        Download Resume
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    2
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;