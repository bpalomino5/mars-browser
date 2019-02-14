import React, { Component } from "react";

import RoverCard from "./RoverCard/RoverCard";
import DefaultCard from "./DefaultCard/DefaultCard";

import { CardDeck, Pagination } from "react-bootstrap";

const RoverGallery = ({ photos }) => (
  <CardDeck>
    {photos.length > 0
      ? photos.map((item, i) => <RoverCard details={item} key={i} />)
      : Array.from(Array(9), (x, i) => <DefaultCard key={i} />)}
  </CardDeck>
);

const RoverPages = ({ onSelectPage }) => (
  <Pagination onClick={onSelectPage}>
    <Pagination.Item id="prev">{`‹`}</Pagination.Item>
    <Pagination.Item id="1">{1}</Pagination.Item>
    <Pagination.Item id="2">{2}</Pagination.Item>
    <Pagination.Item id="3">{3}</Pagination.Item>
    <Pagination.Item id="4">{4}</Pagination.Item>
    <Pagination.Item id="5">{5}</Pagination.Item>
    <Pagination.Item id="next">{`›`}</Pagination.Item>
  </Pagination>
);

export default class RoverDetailView extends Component {
  render() {
    const { onSelectPage, photos } = this.props;
    return (
      <>
        <RoverPages onSelectPage={onSelectPage} />
        <RoverGallery photos={photos} />
      </>
    );
  }
}
