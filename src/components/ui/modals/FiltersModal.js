import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { FormControl } from "react-bootstrap";

const FilterSelector = ({ type, children }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 10
    }}
  >
    <div style={{ marginRight: 10 }}>
      <h5>{type}</h5>
    </div>
    {children}
  </div>
);

const DateSelector = ({ earth_date, handleDayChange }) => (
  <FilterSelector type="Date">
    <DayPickerInput
      value={earth_date}
      onDayChange={(s, m, input) => handleDayChange(input)}
    />
  </FilterSelector>
);

const CameraSelector = ({ camera, onCameraChange }) => (
  <FilterSelector type="Camera">
    <FormControl as="select" value={camera} onChange={onCameraChange}>
      <option>All</option>
      <option>FHAZ</option>
      <option>RHAZ</option>
      <option>MAST</option>
      <option>CHEMCAM</option>
      <option>MAHLI</option>
      <option>MARDI</option>
      <option>NAVCAM</option>
      <option>PANCAM</option>
      <option>MINITES</option>
    </FormControl>
  </FilterSelector>
);

export default class FiltersModal extends Component {
  render() {
    const {
      show,
      handleClose,
      earth_date,
      onDateChange,
      camera,
      onCameraChange
    } = this.props;
    return (
      <Modal size="sm" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DateSelector
            earth_date={earth_date}
            handleDayChange={onDateChange}
          />
          <CameraSelector camera={camera} onCameraChange={onCameraChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
