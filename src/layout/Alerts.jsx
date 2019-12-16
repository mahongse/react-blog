import React, { useContext } from "react";
import Context from "../context/context";
import { Alert, Row, Col } from "react-bootstrap";

const Alerts = () => {
  const { state } = useContext(Context);
  const { alert } = state;

  return (
    alert !== null && (
      <Row className="justify-content-md-center">
        <Col xs={6} md={4}>
          <Alert variant={alert.type}>{alert.msg}</Alert>
        </Col>
      </Row>
    )
  );
};

export default Alerts;
