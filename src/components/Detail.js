import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getDetail } from '../redux/detailSlice';
import './home.css';
import './nav.css';

const Detail = () => {
  const data = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
  useEffect(() => {
    dispatch(getDetail(data.id));
  });
  return (
    <>
      <nav className="nav-detail">
        <Link to="/" className="back">
          <span>&#60;</span>
        </Link>
        <h1>CryptoHouse</h1>
      </nav>
      <Container>
        <Row>
          <Col className="welcome">
            <div className="welcome-body">
              <Image src={detail.icon} />
              <p className="detail-price">
                $
                {detail.price}
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="detail-col-odd">
            <span className="header">Coin name :</span>
            <span>{detail.name}</span>
          </Col>
          <Col xs={12} className="detail-col">
            <span className="header">Coin symbol :</span>
            <span>{detail.symbol}</span>
          </Col>
          <Col xs={12} className="detail-col-odd">
            <span className="header">Ranking :</span>
            <span>{detail.rank}</span>
          </Col>
          <Col xs={12} className="detail-col">
            <span className="header">Price :</span>
            <span>{detail.price}</span>
          </Col>
          <Col xs={12} className="detail-col-odd">
            <span className="header"> Market cap :</span>
            <span>{detail.marketCap}</span>
          </Col>
          <Col xs={12} className="detail-col">
            <span className="header"> Price change week :</span>
            <span>{detail.priceChange1w}</span>
          </Col>
          <Col xs={12} className="detail-col-odd">
            <span className="header"> Avail. supply :</span>
            <span>{detail.availableSupply}</span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Detail;
