import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <React.Fragment>
            <Box sx={{ width: '100%', bgcolor: 'black', color: '#ffff', py: 2 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        4
                    </Grid>
                    <Grid item xs={6}>
                        4
                    </Grid>
                </Grid>
                <Container>
                    <Typography variant="h6" component="div">
                        Copyright &copy; AK. All Right Reserved
                    </Typography>
                </Container>
            </Box>
        </React.Fragment>
    );
};

export default Footer;