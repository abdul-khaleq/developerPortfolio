import { CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import image from '../../../image/website-development-banner_33099-1687.jpg';

const About = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <CardMedia
                            component="img"
                            image={image}
                            alt="Paella dish"
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h4" gutterBottom component="div">
                            ABOUT ME
                        </Typography>
                        <Typography variant="h5" gutterBottom component="div">
                            Web Designer & Developer
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div">
                            I am AK from Bangladesh. I always like to design something new to cope up with the world. My new ideas show me, how to be professional and to much originative. Proper activity in a work is important. That's why I always try to give more attention to my work.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;