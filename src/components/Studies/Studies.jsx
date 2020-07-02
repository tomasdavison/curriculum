import React from 'react';
import styled from '@emotion/styled';

import Title from '../Utils/Title';
import Card from '../Utils/Card';
import { Grid } from '@material-ui/core';

const Container = styled.div`
    margin-left: 20px;
    margin-top: 50px;
`;

const GridContainer = styled.div`
    margin: 20px 30px;
`;

const Studies = () => {

    return (
        <Container id="studies">
            <Title title="Studies"/>
            <GridContainer>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Card
                            image={require('../../images/ivalogo.png')}
                            alternativeText={'IVA'}
                            title={'BACHILLER (SECUNDARIO)'}
                            text={'INSTITUTO VOCACIONAL ARGENTINO'}
                            since={2009}
                            until={2014}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card
                            image={require('../../images/utnbalogo.png')}
                            alternativeText={'UTN'}
                            title={'INGENIERÍA ELECTRÓNICA'}
                            text={'UNIVERSIDAD TECNOLÓGICA NACIONAL'}
                            since={2015}
                            until={2019}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card
                            image={require('../../images/utnbalogo.png')}
                            alternativeText={'UTN'}
                            title={'INGENIERÍA EN SISTEMAS'}
                            text={'UNIVERSIDAD TECNOLÓGICA NACIONAL'}
                            since={2020}
                            until={2020}
                        />
                    </Grid>
                </Grid>
            </GridContainer>
        </Container>
    )
}

export default Studies
