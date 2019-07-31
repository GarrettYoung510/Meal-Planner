import React from 'react';
import Navbar from './../../Partials/Navbar/Navbar'
import Container from './../../Partials/Container/Container'
import Row from './../../Partials/Row/Row'
import Column from './../../Partials/'

const Main = () => {
  return (
    <div className="App">
      <Navbar/>
        <Container>
          <Row>
            <Jumbotron>

            </Jumbotron>
          </Row>
          <Row>
            <Column small={12} medium={6} small={4}>
              <h1>Benefit #1</h1>
            </Column>
            <Column small={12} medium={6} small={4}>
              <h1>Benefit #2</h1>
            </Column>
            <Column small={12} medium={6} small={4}>
              <h1>Benefit #3</h1>
            </Column>
          </Row>
        </Container>

    </div>
  );
};

export default Main;