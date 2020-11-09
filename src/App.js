import NavigationMap from "./components/NavigationMap";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useState, React } from 'react'

function App() {
  const seattle = [47.6062, -122.3321];
  const capeTown = [-33.92, 18.42];
  const london = [51.505, -0.09];

  const [leftLocation, setLeftLocation] = useState(london)
  const [rightLocation, setRightLocation] = useState(capeTown)

  const style = {
    margin: 0,
    padding: 0,
  };

  function updateLeftLocation() {
    setLeftLocation(seattle)
  }

  function updateRightLocation() {
    setRightLocation(seattle)
  }

  return (
    <div className="App">
      <Navbar>
        <Navbar.Brand>Our map navigator</Navbar.Brand>
      </Navbar>
      <Container fluid>
        <Row>
          <Col style={style}>
            <NavigationMap location={leftLocation} />
          </Col>
          <Col style={style}>
            <NavigationMap location={rightLocation} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={updateLeftLocation}>Seattle</Button>
          </Col>
          <Col>
            <Button onClick={updateRightLocation}>Seattle</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
