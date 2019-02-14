import React, { Component } from "react";
import { Navbar, Nav, Button, Form } from "react-bootstrap";

export default class MarsNavbar extends Component {
  render() {
    const { onSelect, onSelectFilters } = this.props;
    return (
      <Navbar
        collapseOnSelect
        expand="sm"
        sticky="top"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand>Mars Rovers</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" onSelect={onSelect}>
            <Nav.Item>
              <Nav.Link eventKey="curiosity">Curiosity</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="opportunity">Opportunity</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="spirit">Spirit</Nav.Link>
            </Nav.Item>
          </Nav>
          <Form inline>
            <Button variant="outline-info" onClick={onSelectFilters}>
              Filters
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
