import React, { Component } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import Navbar from "./components/navigation/Navbar";
import { RoverApi } from "./components/RoverApi";
import FiltersModal from "./components/ui/modals/FiltersModal";
import RoverDetailView from "./components/ui/rover/RoverDetailView";

class App extends Component {
  state = {
    data: null,
    page: 1,
    rover: "curiosity",
    modal: false,
    earth_date: "",
    camera: "All"
  };

  componentDidMount = async () => {
    //prep init state with curiosity data from today

    //get todays data
    let date = new Date();
    let earth_date = `${date.getFullYear()}-${date.getMonth() +
      1}-${date.getDate()}`;

    // call api and update state
    await this.getDataByRover(earth_date, "curiosity");
    this.setState({ earth_date });
  };

  getDataByRover = async (earth_date, rover) => {
    // get data from api
    let data = await RoverApi.getRoverData(rover, {
      earth_date,
      page: 1
    });

    //update state
    this.setState({ rover, data });
  };

  onSelectPage = async id => {
    const { earth_date, rover, page } = this.state;

    // call api
    let data = await RoverApi.getRoverDataByPage(id, page, earth_date, rover);

    //update if data available for page
    if (data.photos.length !== 0) {
      this.setState({ page: id, data });
    }
  };

  onDateChange = async dayPickerInput => {
    const { rover } = this.state;

    //handle date
    const input = dayPickerInput.getInput();
    let earth_date = input.value.trim();

    //update state and get new data based on date
    this.setState({ earth_date });
    await this.getDataByRover(earth_date, rover);
  };

  onCameraChange = async camera => {
    const { earth_date, rover } = this.state;

    //call api
    let data = await RoverApi.getRoverDataByCamera(camera, earth_date, rover);

    //update state
    this.setState({ camera, data });
  };

  render() {
    const { data, modal, earth_date, rover, camera } = this.state;
    return (
      <div className="App">
        <Navbar
          activeKey={rover}
          onSelect={rover => this.getDataByRover(earth_date, rover)}
          onSelectFilters={() => this.setState({ modal: true })}
        />
        <Container className="main-container">
          <FiltersModal
            show={modal}
            handleClose={() => this.setState({ modal: false })}
            earth_date={earth_date}
            onDateChange={this.onDateChange}
            camera={camera}
            onCameraChange={e => this.onCameraChange(e.target.value)}
          />
          {data && (
            <RoverDetailView
              onSelectPage={e => this.onSelectPage(e.target.id)}
              photos={data.photos}
            />
          )}
        </Container>
      </div>
    );
  }
}

export default App;
