import React, { useEffect, useContext } from "react";
import UserItem from "../components/UserItem";
import CardItem from "../components/CardItem";
import Spinner from "../components/Spinner";
import Context from "../context/context";
import PropTypes from "prop-types";
import posts from "../api/post";
import bloggers from "../api/blogger";
import { Row, Col, ListGroup } from "react-bootstrap";

const Home = ({ setLoading }) => {
  const { state, dispatch } = useContext(Context);
  const { blogger, post, loading } = state;

  useEffect(() => {
    const getData = async () => {
      setLoading();
      const bloggerData = await bloggers.getList();
      const postData = await posts.getList();
      dispatch({ type: "GET_BLOGGERS", payload: bloggerData });
      dispatch({ type: "GET_POSTS", payload: postData });
    };
    getData();
    // eslint-disable-next-line
  }, []);

  const classesConfig = {
    height: "83vh",
    overflowY: "auto",
    backgroundColor: "#fff"
  };

  if (loading) return <Spinner />;

  return (
    <Row>
      <Col sm={4} style={classesConfig}>
        {blogger && blogger.map(b => <UserItem key={b.id} blogger={b} />)}
      </Col>
      <Col sm={8} style={classesConfig}>
        <ListGroup>
          {post && post.map(p => <CardItem key={p.id} post={p} />)}
        </ListGroup>
      </Col>
    </Row>
  );
};

Home.setLoading = {
  setLoading: PropTypes.func.isRequired
};

export default Home;
