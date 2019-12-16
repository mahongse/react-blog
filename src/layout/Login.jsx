import React, { useContext } from "react";
import Context from "../context/context";
import Storage from "../services/storage";
import PropTypes from "prop-types";
import login from "../api/loginApi";
import { Row, Col, Form, Button, Card } from "react-bootstrap";

const Login = ({ setAlert }) => {
  const { state, dispatch } = useContext(Context);
  const { user } = state;
  const { email, password } = user;

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch({ type: "LOGIN", payload: { ...user, [name]: value } });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = user;
    if (!email || !password) {
      setAlert("Please fill in the fields!", "danger");
    } else {
      const response = await login.create(user);
      if (response.userId) {
        Storage.set("acc-token", response.id);
        Storage.set("acc-user", { userID: response.userId });
        setAlert("Logged in successfully!", "success");
        dispatch({ type: "SET_TAB", payload: "Workspace" });
      } else {
        alert("Incorrect email or password");
      }
    }
  };

  return (
    <Row className="justify-content-md-center">
      <Col xs={6} md={4}>
        <Card className="py-5 px-4">
          <div className="h3 mb-3 primary">Login</div>
          <h6 className="font-weight-light mb-4">Please login to continue.</h6>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Login
            </Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

Login.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default Login;
