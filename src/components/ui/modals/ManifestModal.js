import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import DetailView from "../helpers/DetailView/DetailView";

export default class ManifestModal extends Component {
  render() {
    const { show, handleClose, data } = this.props;
    return (
      <Modal size="sm" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Manifest</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="detail-section">
            <DetailView title="Name" detail={data.name} />
            <DetailView title="Landing Date" detail={data.landing_date} />
            <DetailView title="Launch Date" detail={data.launch_date} />
            <DetailView title="Status" detail={data.status} />
            <DetailView title="Max Date" detail={data.max_date} />
            <DetailView title="Max Sol" detail={data.max_sol} />
            <DetailView title="Total Photos" detail={data.total_photos} />
          </div>
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
