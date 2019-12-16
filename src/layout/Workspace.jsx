import React, { useEffect, useContext } from "react";
import WsItem from "../components/WsItem";
import ModalWindow from "./ModalWindow";
import Avatar from "../components/Avatar";
import Spinner from "../components/Spinner";
import Context from "../context/context";
import Storage from "../services/storage";
import PropTypes from "prop-types";
import bloggers from "../api/blogger";
import posts from "../api/post";
import { CardColumns, Card, Row, Col, Button } from "react-bootstrap";

const Workspace = ({ setLoading }) => {
  const { state, dispatch } = useContext(Context);
  const { userPosts, loggedUser, modalShow, loading } = state;

  useEffect(() => {
    const getData = async () => {
      setLoading();
      const obj = Storage.get("acc-user");
      const user = await bloggers.getByID(obj.userID);
      const posts = await bloggers.getListByID(obj.userID, "posts");
      dispatch({ type: "LOGGEDUSER", payload: user });
      dispatch({ type: "GET_USERPOSTS", payload: posts });
    };
    getData();
    // eslint-disable-next-line
  }, []);

  const toLowerCaseKeys = obj => {
    return Object.keys(obj).reduce((accum, key) => {
      accum[key.toLowerCase()] = obj[key];
      return accum;
    }, {});
  };

  const logged = toLowerCaseKeys(loggedUser);
  const { id, username } = logged;

  const handleCreate = async newPost => {
    if (newPost.id) {
      const newPosts = userPosts.map(p => (p.id === newPost.id ? newPost : p));
      dispatch({ type: "GET_USERPOSTS", payload: newPosts });
      posts.update(newPost.id, newPost);
      handleModalHide();
      return;
    }

    newPost = {
      ...newPost,
      personId: id,
      author: username
    };

    const data = await posts.create(newPost);
    if (data.id) {
      dispatch({ type: "GET_USERPOSTS", payload: [...userPosts, data] });
      handleModalHide();
    }
  };

  const handleDelete = post => {
    if (post.id) {
      const filteredPosts = userPosts.filter(p => p.id !== post.id);
      dispatch({ type: "GET_USERPOSTS", payload: filteredPosts });
      posts.delete(post.id);
    }
  };

  const handleEdit = post => {
    handleModalShow();
    if (post.id) {
      const postToEdit = userPosts.find(p => p.id === post.id);
      dispatch({ type: "SET_POST", payload: postToEdit });
    }
  };

  const handleModalShow = () => {
    dispatch({ type: "SHOW_MODAL" });
  };

  const handleModalHide = () => {
    dispatch({ type: "HIDE_MODAL" });
  };

  return (
    <div>
      <Card
        className="py-4 px-4"
        border="primary"
        style={{ width: "55%", margin: "auto" }}
      >
        <Row noGutters>
          <Col md={3}>
            <Avatar style={{ width: "120px", height: "120px" }} />
          </Col>
          <Col className="align-self-center" md="auto">
            <Card.Title>Welcome {username}</Card.Title>
          </Col>
          <Col className="align-self-center d-flex justify-content-end">
            <Button variant="primary" onClick={handleModalShow}>
              Create Post
            </Button>
          </Col>
        </Row>
      </Card>
      {loading ? (
        <Spinner />
      ) : (
        <CardColumns className="mt-5">
          {userPosts.map(p => (
            <WsItem
              key={p.id}
              post={p}
              onPostDelete={handleDelete}
              onPostEdit={handleEdit}
            />
          ))}
        </CardColumns>
      )}
      <ModalWindow
        show={modalShow}
        onPostCreate={handleCreate}
        onHide={handleModalHide}
      />
    </div>
  );
};

Workspace.propTypes = {
  setLoading: PropTypes.func.isRequired
};

export default Workspace;
