import React from "react";
import { Card } from "react-bootstrap";

const DefaultCard = () => (
  <Card
    border="secondary"
    style={{ minWidth: "300px", maxWidth: "300px", marginBottom: 20 }}
  >
    <div
      style={{ width: "auto", height: "200px", backgroundColor: "lightgray" }}
    />
    <Card.Body>
      <div
        style={{
          width: "80px",
          height: "30px",
          backgroundColor: "lightgray",
          marginBottom: 10
        }}
      />
      <div
        style={{
          width: "auto",
          height: "30px",
          backgroundColor: "lightgray",
          marginBottom: 10
        }}
      />
      <div
        style={{ width: "auto", height: "30px", backgroundColor: "lightgray" }}
      />
    </Card.Body>
  </Card>
);

export default DefaultCard;
