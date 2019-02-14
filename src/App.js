import React, { Component } from "react";
import "./App.css";
import { Container, Card, CardDeck, Pagination } from "react-bootstrap";
import Navbar from "./components/navigation/Navbar";
import { RoverApi } from "./components/RoverApi";
import FiltersModal from "./components/modals/FiltersModal";

import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

const getDate = () => {
  let date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

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

const RoverGallery = ({ photos }) => (
  <CardDeck>
    {photos.map((item, i) => (
      <RoverCard details={item} key={i} />
    ))}
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

class App extends Component {
  state = {
    data: null,
    page: 1,
    rover: "curiosity",
    modal: false,
    earth_date: ""
  };

  componentDidMount = async () => {
    let earth_date = getDate();
    await this.getDataByRover(earth_date, "curiosity");
    this.setState({ earth_date });
  };

  getDataByRover = async (earth_date, rover) => {
    let data = await RoverApi.getRoverData(rover, {
      earth_date,
      page: 1
    });

    console.log(data);
    this.setState({ rover, data });
  };

  getDataByPage = async event => {
    const { earth_date, rover, page } = this.state;

    let id = event.target.id;
    if (id === "next") id = page + 1;
    else if (id === "prev" && page > 1) id = page - 1;
    id = parseInt(id);

    let data = await RoverApi.getRoverData(rover, {
      earth_date,
      page: id
    });

    if (data.photos.length !== 0) {
      this.setState({ page: id, data });
    }
  };

  handleDayChange = async dayPickerInput => {
    const { rover } = this.state;
    const input = dayPickerInput.getInput();
    let earth_date = input.value.trim();
    this.setState({ earth_date });
    await this.getDataByRover(earth_date, rover);
  };

  render() {
    const { data, modal, earth_date } = this.state;
    return (
      <div className="App">
        <Navbar
          onSelect={rover => this.getDataByRover(earth_date, rover)}
          onSelectFilters={() => this.setState({ modal: true })}
        />
        <Container className="main-container">
          <FiltersModal
            show={modal}
            handleClose={() => this.setState({ modal: false })}
          />
          <div style={{ display: "inline-flex" }}>
            <div style={{ marginRight: 10 }}>
              <h4>Date</h4>
            </div>
            <DayPickerInput
              value={earth_date}
              onDayChange={(s, m, input) => this.handleDayChange(input)}
            />
          </div>
          <div style={{ marginBottom: 10 }} />
          <RoverPages onSelectPage={this.getDataByPage} />
          {data && <RoverGallery photos={data.photos} />}
        </Container>
      </div>
    );
  }
}

export default App;
