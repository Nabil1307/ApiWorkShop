import React from "react";
import Card from "react-bootstrap/Card";

function Cards({ dat }) {
  /* console.log({dat}) */
  //
  return (
    // <div>{dat.name}</div>
    <>
      <Card
        border="info"
        style={{
          width: "30%",
          display: "flex",
          justifyContent: "space-around",
         
          marginTop: "20px",
        }}
      >
        <Card.Header>id:{dat.id} </Card.Header>
        <Card.Body>
          <Card.Title>{dat.name}</Card.Title>
          <Card.Text>
            Tel: {dat.phone} Mail:{dat.email}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
export default Cards;
