import React, { useContext } from "react";
import Storage from "../services/storage";
import Context from "../context/context";
import { Navbar, Nav } from "react-bootstrap";
import { initialLoginState } from "../context/state";

const NavBar = () => {
  const { dispatch } = useContext(Context);

  const setTab = tab => {
    dispatch({ type: "SET_TAB", payload: tab });
  };

  const handleLogout = () => {
    Storage.remove("acc-token");
    Storage.remove("acc-user");
    setTab("Login");
    dispatch({ type: "LOGIN", payload: initialLoginState });
  };

  const token = Storage.get("acc-token");
  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      style={{ height: "9vh", marginBottom: "2rem", paddingLeft: "4rem" }}
    >
      <Navbar.Brand href="#home">Blog</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link onClick={() => setTab("Home")}>Home</Nav.Link>
        {!token ? (
          <Nav.Link onClick={() => setTab("Registration")}>
            Registration
          </Nav.Link>
        ) : (
          <Nav.Link onClick={() => setTab("Workspace")}>Workspace</Nav.Link>
        )}
        {!token ? (
          <Nav.Link onClick={() => setTab("Login")}>Login</Nav.Link>
        ) : (
          <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
        )}
      </Nav>
    </Navbar>
  );
};

export default NavBar;
