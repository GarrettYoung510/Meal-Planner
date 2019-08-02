import React from "react";
import Column from "../Column/Column";
import Row from "../Row/Row";
import Card from "../Card/Card";
import Container from "../Container/Container";

const MealCarousel = () => {
  /* cards for meal dump */
  return (
    <Container>
      <Row>
        {/* row 1 item 1 */}
        <Column>
          <Card href={"/"}>example of something</Card>
        </Column>
        {/* row 1 item 2 */}
        <Column>
          <Card href={"/"} />
        </Column>
        {/* row 1 item 3 */}
        <Column>
          <Card href={"/"} />
        </Column>
      </Row>
      {/* row 2 */}
      <Row>
        {/* row 2 item 1 */}
        <Column>
          <Card href={"/"} />
        </Column>
        {/* row 2 item 2 */}
        <Column>
          <Card href={"/"} />
        </Column>
        {/* row 2 item 3 */}
        <Column>
          <Card href={"/"} />
        </Column>
      </Row>
    </Container>
  );
};

export default MealCarousel;
