import React, { Component } from 'react';
import Container from "./../../Partials/Container/Container";
import Row from './../../Partials/Row/Row';
import Column from './../../Partials/Column/Column';
import Card from './../../Partials/Card/Card';


class MealSelect extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Column
            small={12}
            medium={8}
            large={8}
            offset_sm={0}
            offset_md={2}
            offset_lg={2}
          >
            <Card />
          </Column>
        </Row>
      </Container>
    );
  }
}

export default MealSelect;
