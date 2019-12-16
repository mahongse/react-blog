import React from "react";
import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";

const CardItem = ({ post }) => {
  const { author, description } = post;
  return (
    <ListGroup.Item bg="light" action className="border-0 rounded-0">
      {description}
      <blockquote className="blockquote mb-0 card-body">
        <footer className="blockquote-footer">
          <small className="text-muted">
            <cite title="Source Title">{author}</cite>
          </small>
        </footer>
      </blockquote>
    </ListGroup.Item>
  );
};

CardItem.propTypes = {
  post: PropTypes.object.isRequired
};

export default CardItem;
