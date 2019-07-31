import React from "react";
import Container from "./../../Partials/Container/Container";

class MealSelect extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default MealSelect;
