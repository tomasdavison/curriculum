import React from 'react';
import styled from '@emotion/styled';

import Title from '../Utils/Title'
import { Grid, Card, CardContent, Typography, CardActionArea, CardMedia } from '@material-ui/core';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Cabin',
      ].join(','),
    },
  });

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)'
    },
    media: {
      height: 300,
      borderBottom: "1px solid black"
    },
    content: {
        background: "#D6D6D6"
    }
  });

const Container = styled.div`
    margin-left: 20px;
    margin-top: 50px;
`;

const GridContainer = styled.div`
    margin: 20px 30px;
`;

const Studies = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Container id="studies">
                <Title title="Studies"/>
                <GridContainer>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Card 
                                className={classes.root}
                            >
                                <CardActionArea
                                    onClick={() => window.open('http://www.institutovocacional.org.ar/')}                            
                                >
                                    <CardMedia
                                        className={classes.media}
                                        image={require('../../images/ivalogo.png')}
                                        title="Instituto Vocacional Argentino"
                                    />
                                    <CardContent
                                        className={classes.content}
                                    >
                                        <Typography gutterBottom variant="h5" component="h3">
                                            Bachiller (High School)
                                        </Typography>
                                        <Typography gutterBottom variant="text-primary" component="h4">
                                            Instituto Vocacional Argentino
                                        </Typography>
                                        <Typography gutterBottom variant="text-secondary" component="p">
                                            2009-2014
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card 
                                    className={classes.root}
                                >
                                    <CardActionArea
                                        onClick={() => window.open('https://www.frba.utn.edu.ar/wp-content/uploads/2019/09/plan95a.pdf')}                            
                                    >
                                        <CardMedia
                                            className={classes.media}
                                            image={require('../../images/utnbalogo.png')}
                                            title="Universidad Tecnológica Nacional"
                                        />
                                        <CardContent
                                            className={classes.content}
                                        >
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Electronic Engineering
                                            </Typography>
                                            <Typography gutterBottom variant="text-primary" component="h4">
                                                Uniersidad Tecnológica Nacional
                                            </Typography>
                                            <Typography gutterBottom variant="text-secondary" component="p">
                                                2016 - 2019
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card 
                                    className={classes.root}
                                >
                                    <CardActionArea
                                        onClick={() => window.open('http://www.sistemas.frba.utn.edu.ar/index.php/academico/plan-k08')}                            
                                    >
                                        <CardMedia
                                            className={classes.media}
                                            image={require('../../images/utnbalogo.png')}
                                            title="Universidad Tecnológica Nacional"
                                        />
                                        <CardContent
                                            className={classes.content}
                                        >
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Systems Engineer
                                            </Typography>
                                            <Typography gutterBottom variant="text-primary" component="h4">
                                                Uniersidad Tecnológica Nacional
                                            </Typography>
                                            <Typography gutterBottom variant="text-secondary" component="p">
                                                2020 - Present
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </GridContainer>
            </Container>
        </ThemeProvider>
    )
}

export default Studies
