import React from "react";
import Card from "../Card/Card";
import Column from "../Column/Column";
import Container from "../Container/Container";
import Row from "../Row/Row";
import { Link } from 'react-router-dom';

const ShoppingLinks = props => {
  return (
    <Container>
      <Row>
        {/* link 1 */}
        <Column>
          <Card>
            <Link to={props.href} className="btn btn-info" role="button">
              Amazon(not linked)
            </Link>
          </Card>
        </Column>
        {/* link 2 */}
        <Column>
          <Card>
            <Link to={props.href} className="btn btn-info" role="button">
              costco(not linked)
            </Link>
          </Card>
        </Column>
        {/* link 3 */}
        <Column>
          <Card>
            <Link to={props.href} className="btn btn-info" role="button">
              some food delivery company(not linked)
            </Link>
          </Card>
        </Column>
      </Row>
    </Container>
  );
};

export default ShoppingLinks;
