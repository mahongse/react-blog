import React from "react";
import avatar from "./avatar.png";
import { Image } from "react-bootstrap";

const Avatar = ({ style }) => {
  return (
    <React.Fragment>
      <Image src={avatar} roundedCircle thumbnail style={style} />
    </React.Fragment>
  );
};

export default Avatar;
