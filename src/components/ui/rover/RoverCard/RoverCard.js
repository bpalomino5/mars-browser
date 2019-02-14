import React from "react";
import { Card } from "react-bootstrap";
import "./RoverCard.css";

const CardData = ({ title, detail }) => (
  <div className="card-data-container">
    <div className="data-title">{title}:&nbsp;</div>
    <div>{detail}</div>
    <hr />
  </div>
);

const RoverCard = ({ details }) => (
  <Card border="secondary" className="card-container">
    <Card.Img variant="top" src={details.img_src} />
    <Card.Body>
      <Card.Title>{details.camera.full_name}</Card.Title>
      <div className="data-section">
        <CardData title="Date" detail={details.earth_date} />
        <CardData title="Camera ID" detail={details.camera.id} />
        <CardData title="Rover ID" detail={details.camera.rover_id} />
        <CardData title="Image ID" detail={details.id} />
        <CardData title="Sol" detail={details.sol} />
      </div>
    </Card.Body>
  </Card>
);

export default RoverCard;
