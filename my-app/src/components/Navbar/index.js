import React from "react";
import "./style.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Navbar extends React.Component {

  state = {
    count: 0
  };

  // state = {
  //   totalCount: 0
  // }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // totalIncrement = () => {
  //   this.setState({ totalCount: this.state.count + 1 })
  // };

  render() {
    return(
      <div id="navbar">
        <Container id="navContainer">
        <Row className="text-white">
          <Col>
          <h2>Clicky Game</h2>
          </Col>
          <Col>
          <h3>Click an Image to begin!</h3>
          </Col>
          <Col className="text-center">
      <h3>Score: {this.state.count}  Top Score:</h3>
          </Col>
        </Row>
      </Container>
      </div>

    );
  }
  
}


export default Navbar;
