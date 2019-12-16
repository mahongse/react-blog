import React from "react";
import PropTypes from "prop-types";
import { Card, ButtonGroup, Button } from "react-bootstrap";

const WsItem = ({ post, onPostDelete, onPostEdit }) => {
  const { title, description, author } = post;
  return (
    <Card className="p-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <blockquote className="blockquote mb-0">
          <p>{description}</p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              <cite title="Source Title">{author}</cite>
            </small>
          </footer>
        </blockquote>
        <ButtonGroup className="mt-3">
          <Button
            size="sm"
            variant="outline-primary"
            onClick={() => onPostEdit(post)}
          >
            Edit
          </Button>
          <Button
            size="sm"
            variant="outline-primary"
            onClick={() => onPostDelete(post)}
          >
            Delete
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

WsItem.propTypes = {
  post: PropTypes.object.isRequired,
  onPostDelete: PropTypes.func.isRequired,
  onPostEdit: PropTypes.func.isRequired
};

export default WsItem;
