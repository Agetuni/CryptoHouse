import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./home.css";
import Card from "react-bootstrap/Card";
const Home = () => (
  <Container>
    <Row>
      <Col className="welcome">
        <h1>Welcome!</h1>
        <h2>CryptoHouse</h2>
        <h2>12599 Crypt Data</h2>
      </Col>
    </Row>
    <Row>
      <Col xs={6} className="coll">
        <p>USD</p>
        <p>United state Dollar</p>
        <p>price: 1356.2</p>
      </Col>
      <Col xs={6} className="coll">
        <p>UTC</p>
        <p>United state Dollar</p>
        <p>price: 1356.2</p>
      </Col>
      <Col xs={6} className="coll">
        <p>USD</p>
        <p>United state Dollar</p>
        <p>price: 1356.2</p>
      </Col>
      <Col xs={6} className="coll">
        <p>UTC</p>
        <p>United state Dollar</p>
        <p>price: 1356.2</p>
      </Col>
    </Row>
  </Container>
);
export default Home;
