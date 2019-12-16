import React from "react";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import { Card } from "react-bootstrap";

const UserItem = ({ blogger }) => {
  const { lastname, username, lastName, userName } = blogger;
  return (
    <Card
      style={{ userSelect: "none" }}
      bg="light"
      className="border-0 rounded-0"
    >
      <Card.Body>
        <Avatar
          style={{
            width: "60px",
            height: "60px",
            marginRight: "10px"
          }}
        />
        {lastname || lastName} {username || userName}
      </Card.Body>
    </Card>
  );
};

UserItem.propTypes = {
  blogger: PropTypes.object.isRequired
};
export default UserItem;
