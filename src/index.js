import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactDOM from "react-dom";
import { FaShoppingCart } from "react-icons/fa";
import MyReactImageMagnify from "./MyReactImageMagnify";
import './styles.css';

const App = () => {
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setCount(e.target.value)
  }
  return (
    <Container>
      <Row className="mt-5 shadow p-3 rounded">
        <Col md={6}>
          <div className="col-6 col-md-12">
            <MyReactImageMagnify />
          </div>
        </Col>

        <Col md={6}>
          <div className="p-4">
            <h4>dfd - Half Sleeve Tshirt</h4>
            <div className="d-flex flex-column text-muted">
              <span>200 review</span>
              <span>
                Availability : <code className="text-danger">In Stock</code>{" "}
              </span>
              <span>Standar Delviery</span>
              <span>
                Inside Dhaka : <code className="text-danger">3 days</code>{" "}
              </span>
              <span>
                Outside Dhaka : <code className="text-danger">3-5 days</code>{" "}
              </span>
            </div>

            <h3 className="text-danger mt-3">
              300 TAKA{" "}
              <sup className="text-muted">
                {" "}
                <del>350 taka</del>{" "}
              </sup>
            </h3>

            <div className="d-flex gap-2 mt-3">

              <div className="w-25 d-flex gap-3 align-items-center">
                <b>QTY</b>
                <div className="d-flex align-items-center gap-2 shadow px-2 rounded py-1">
                  <input type="number" className="" value={count} onChange={handleChange} />
                </div>
              </div>

              <div>
                <button className="btn btn-xxl btn-warning text-dark fw-bold">
                  <FaShoppingCart /> ADD TO CART
                </button>
              </div>

            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
