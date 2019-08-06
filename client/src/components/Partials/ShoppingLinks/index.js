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
          {/* Amazon Fresh */}
          <Card>

            <button
              type="submit"
              // href={props.href}
              href="https://www.amazon.com/AmazonFresh/b?ie=UTF8&node=10329849011"
              class="btn btn-warning"
              role="button"
            >
              Amazon Fresh (I DON'T WORK)
            </button>
          </Card>
        </Column>
        {/* link 2 */}
        <Column>
          <Card>

            <button
              type="submit"
              // href={props.href}
              onclick="https://sameday.costco.com/"
              class="btn btn-warning"
              role="button"
            >
              Costco Same Day (I DON'T WORK)
            </button>

          </Card>
        </Column>
        <Column>
          <Card>

            <button
              type="submit"
              // href={props.href}
              onclick="location.href = 'https://shop.safeway.com/home.html?r=https%3A%2F%2Fwww.google.com%2F';"
              class="btn btn-warning"
              role="button"
            >
              Safeway Delivery (I DON'T WORK)
            </button>

          </Card>
        </Column>
      </Row>
    </Container>
  );
};

export default ShoppingLinks;
