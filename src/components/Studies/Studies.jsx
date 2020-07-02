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
                            image={require('../../images/tdavison.png')}
                            alternativeText={'Hola'}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card
                            image={'image'}
                            alternativeText={'Hola'}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card
                            image={'image'}
                            alternativeText={'Hola'}
                        />
                    </Grid>
                </Grid>
            </GridContainer>
        </Container>
    )
}

export default Studies
