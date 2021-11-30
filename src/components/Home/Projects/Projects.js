import { Button, Card, CardActions, CardContent, CardMedia, Container, FormControlLabel, Grid, Link, Paper, Switch, Typography, Zoom } from '@mui/material';
import { Box, display } from '@mui/system';
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import image from '../../../image/website-development-banner_33099-1687.jpg';

const useStyles = makeStyles({
    root: {
        width: 300,
        height: 300,
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        backgroundImage: `url(${image})`,
        "& .display": {
            display: "none"
        },
        "&:hover .display": {
            display: "block",
            backgroundColor: '#6495ED',
            height: '100%',
        },
    },
    hoverLink: {
        backgroundColor: '#88B04B',
        color: 'white',
        padding: '10px',
        borderRadius: '10px',
    }
});
const Projects = () => {
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography gutterBottom variant="h4" component="div">
                    Projects
                </Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    <Grid item xs={12} sm={4} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="300"
                                image={image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Watch Ecommurce Site
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <strong>Technologies:</strong> JavaScript, React, React-Bootstrap, Firebase Authentication,
                                    MongoDB
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"><Link target="_blank" href="https://watch-32b35.web.app" underline="hover">
                                    Live Link
                                </Link></Button>
                                <Button size="small"><Link target="_blank" href="https://github.com/programming-hero-web-course-4/niche-website-client-side-abdul-khaleq" underline="hover">
                                    GitHub Client
                                </Link></Button>
                                <Button size="small"><Link target="_blank" href="https://github.com/programming-hero-web-course-4/niche-website-server-side-abdul-khaleq" underline="hover">
                                    GitHub Server
                                </Link></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="300"
                                image={image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Travel lover
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <strong>Technologies:</strong> JavaScript, React, React-Bootstrap, Firebase Authentication,
                                    MongoDB
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"><Link target="_blank" href="https://travel-351be.web.app" underline="hover">
                                    Live Link
                                </Link></Button>
                                <Button size="small"><Link target="_blank" href="https://github.com/programming-hero-web-course1/tourism-or-delivery-website-client-side-abdul-khaleq" underline="hover">
                                    GitHub Client
                                </Link></Button>
                                <Button size="small"><Link target="_blank" href="https://github.com/programming-hero-web-course1/tourism-or-delivery-website-server-side-abdul-khaleq" underline="hover">
                                    GitHub Server
                                </Link></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="300"
                                image={image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <strong>Technologies:</strong> JavaScript, React, React-Bootstrap, Firebase Authentication
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"><Link target="_blank" href="https://medicare-61fd5.web.app" underline="hover">
                                    Live Link
                                </Link></Button>
                                <Button size="small"><Link target="_blank" href="https://github.com/Programming-Hero-Web-Course3/healthcare-related-website-abdul-khaleq" underline="hover">
                                    GitHub Client
                                </Link></Button>
                            </CardActions>
                        </Card>
                    </Grid>


                </Grid>
                <br /><br /><br />
            </Container>

        </Box>

    );
};

export default Projects;