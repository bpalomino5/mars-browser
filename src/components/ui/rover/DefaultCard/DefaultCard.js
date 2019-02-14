import React from "react";
import { Card } from "react-bootstrap";
import "./DefaultCard.css";

const DefaultCard = () => (
  <Card border="secondary" className="card-container">
    <div className="image-skeleton" />
    <Card.Body>
      <div className="title-skeleton" />
      <div className="detail-skeleton" />
      <div className="detail-skeleton" />
    </Card.Body>
  </Card>
);

export default DefaultCard;
