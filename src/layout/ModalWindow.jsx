import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context/context";
import { Modal, Form, Button, Alert } from "react-bootstrap";

const ModalWindow = ({ onPostCreate, onHide, ...props }) => {
  const { state, dispatch } = useContext(Context);
  const { template, errors } = state;
  const { id, title, description } = template;

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch({ type: "SET_POST", payload: { ...template, [name]: value } });
  };

  const checkValidation = () => {
    const errors = {};
    if (title.trim() === "" || description.trim() === "") {
      errors.message = "Fields are required!";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleSubmit = e => {
    e.preventDefault();

    const errors = checkValidation();
    dispatch({ type: "SET_ERRORS", payload: errors || {} });
    if (errors) {
      setTimeout(() => dispatch({ type: "CLEAR_ERRORS" }), 1500);
    }
    onPostCreate(template);
  };

  useEffect(() => {
    dispatch({ type: "SET_POST", payload: template });
    // eslint-disable-next-line
  }, [template]);

  return (
    <Modal {...props} centered>
      <Modal.Header>
        <Modal.Title>{id ? "Edit Post" : "New Post"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={title || ""}
              onChange={handleChange}
              placeholder="Title"
            />
          </Form.Group>
          <Form.Group controlId="formBasicTextarea">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="description"
              value={description || ""}
              onChange={handleChange}
              placeholder="Description"
            />
          </Form.Group>
          {errors.message && <Alert variant="danger">{errors.message}</Alert>}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          {id ? "Update" : "Create"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ModalWindow.propTypes = {
  onHide: PropTypes.func.isRequired,
  onPostCreate: PropTypes.func.isRequired
};

export default ModalWindow;
