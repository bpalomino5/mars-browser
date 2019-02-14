import React from "react";
import { Card } from "react-bootstrap";

const RoverCard = ({ details }) => (
  <Card
    border="secondary"
    style={{ minWidth: "300px", maxWidth: "300px", marginBottom: 20 }}
  >
    <Card.Img variant="top" src={details.img_src} />
    <Card.Body>
      <Card.Title>{details.camera.full_name}</Card.Title>
      <Card.Text>Date: {details.earth_date}</Card.Text>
      <Card.Text>ID: {details.id}</Card.Text>
    </Card.Body>
  </Card>
);

export default RoverCard;
