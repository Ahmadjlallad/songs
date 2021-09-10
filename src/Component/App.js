import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SongList from "./SongList";
import { Container, Col, Row } from "react-bootstrap";
import SongDetail from "./SongDetail";
// *in redux we will use redux state not react state
const App = () => {
  return (
    <Container
      style={{
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="justify-content-md-center align-content-md-center"
    >
      <Row
        className="align-content-md-center"
        style={{
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Col>
          <SongList />
        </Col>
        <Col>
          <SongDetail />
        </Col>
      </Row>
    </Container>
  );
};
export default App;
