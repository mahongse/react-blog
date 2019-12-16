import React, { useContext } from "react";
import Context from "../context/context";
import PropTypes from "prop-types";
import bloggers from "../api/blogger";
import { Row, Col, Form, Button, Card } from "react-bootstrap";

const Registration = ({ setAlert }) => {
  const { state, dispatch } = useContext(Context);
  const { account } = state;
  const { username, lastname, email, password } = account;

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch({ type: "REGISTER", payload: { ...account, [name]: value } });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!username || !lastname || !email || !password) {
      setAlert("Please fill in all fields!", "danger");
    } else {
      setAlert("Account is created!", "success");
      bloggers.create(account);
      dispatch({ type: "SET_TAB", payload: "Login" });
    }
  };

  return (
    <Row className="justify-content-md-center">
      <Col xs={6} md={4}>
        <Card className="py-5 px-4">
          <div className="h3 mb-3 primary">Registration</div>
          <h6 className="mb-4">Hello! Let's get started.</h6>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUsername">
              <Form.Control
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                placeholder="Username"
              />
            </Form.Group>
            <Form.Group controlId="formBasicLastname">
              <Form.Control
                type="text"
                name="lastname"
                value={lastname}
                onChange={handleChange}
                placeholder="Lastname"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
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
              Register
            </Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

Registration.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default Registration;
