import { CardMedia, Container, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';
import image from '../../../image/ak1.png';

const About = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container sx={{ py: 5 }}>
                <Typography
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    variant="h4" gutterBottom component="div">
                    ABOUT ME
                </Typography>
                <Grid container spacing={2} rowSpacing={5}>
                    <Grid
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        item xs={12} sm={6}>
                        <CardMedia
                            component="img"
                            height="500px"
                            image={image}
                            alt="Paella dish"
                        />
                    </Grid>
                    <Grid
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box>
                            <Typography variant="h6" gutterBottom component="div">
                                This is Abdul Khaleq
                            </Typography>
                            <Typography variant="h4" gutterBottom component="div">
                                <Typewriter
                                    options={{
                                        strings: ['Web Developer', 'Web Designer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Typography>
                            <Typography align="left" variant="subtitle1" gutterBottom component="div">
                                Hello! My name is Md. Abdul Khaleq, I'm a junior front-end developer specializing in developing React WebApp. I enjoy creating websites using JavaScript, React, and Material Ui
                            </Typography>
                            <Typography align="left" variant="h6" gutterBottom component="div">
                                Certified by <Link target="_blank" href="https://www.programming-hero.com/" underline="none">
                                    Programming Hero
                                </Link>
                            </Typography>
                            <Typography align="left" variant="subtitle1" gutterBottom component="div">
                                I'm skilled in HTML5, CSS3, JavaScript, React JS, Bootstrap, React-bootstrap, Tailwind, Material UI, Firebase-Authentication, React Router, Express, MongoDB, Node JS, Heroku, Netlify, GitHub
                            </Typography>
                            <Typography align="left" variant="subtitle1" gutterBottom component="div">
                                I have created some websites and applications using modern HTML5, CSS3, JavaScript, and React. Also using other modern technologies easy-to-use, user-friendly websites, and applications. I am assured I might be a wonderful addition to your organization. I actively search out new technologies and keep up-to-date. I have attached a copy of my resume detailing my experience
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;