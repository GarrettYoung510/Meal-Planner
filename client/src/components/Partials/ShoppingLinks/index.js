import React from "react";
import Card from "../Card/Card";
import Column from "../Column/Column";
import Container from "../Container/Container";
import Row from "../Row/Row";

const ShoppingLinks = props => {
  return (
    <Container>
      <Row>
        {/* link 1 */}
        <Column>
          <Card>
            <a href={props.href} class="btn btn-info" role="button">
              Amazon(not linked)
            </a>
          </Card>
        </Column>
        {/* link 2 */}
        <Column>
          <Card>
            <a href={props.href} class="btn btn-info" role="button">
              costco(not linked)
            </a>
          </Card>
        </Column>
        {/* link 3 */}
        <Column>
          <Card>
            <a href={props.href} class="btn btn-info" role="button">
              some food delivery company(not linked)
            </a>
          </Card>
        </Column>
      </Row>
    </Container>
  );
};

export default ShoppingLinks;
