import React from 'react';
import AppBar from '../../component/app-bar';
import Cardd from '../../component/cards-jenis';
import CardJenis from '../../component/card-jenis-fast-food';
import Navigation from '../../component/bottom-navigation';
import Container from '@material-ui/core/Container';

function Home() {
  return (
    <Container maxWidth="xs">
      <AppBar style={{ marginLeft: 80 }} title="W.O.Y RESTAURANT" />
      <Cardd />
      <CardJenis />
      <Navigation />
    </Container>
  );
}

export default Home;
