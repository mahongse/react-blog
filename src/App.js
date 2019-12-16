import React, { Fragment, useContext, useReducer } from "react";
import NavBar from "./layout/NavBar";
import Home from "./layout/Home";
import Registration from "./layout/Registration";
import Login from "./layout/Login";
import Workspace from "./layout/Workspace";
import Alerts from "./layout/Alerts";
import Context from "./context/context";
import reducer from "./reducer/reducer";
import Container from "react-bootstrap/Container";
import "./App.css";

const App = () => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  const setAlert = (msg, type) => {
    dispatch({ type: "SET_ALERT", payload: { msg, type } });
    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 1500);
  };

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Fragment>
        <NavBar />
        <Container>
          <Alerts />
          {state.tab === "Home" && <Home setLoading={setLoading} />}
          {state.tab === "Registration" && <Registration setAlert={setAlert} />}
          {state.tab === "Login" && <Login setAlert={setAlert} />}
          {state.tab === "Workspace" && <Workspace setLoading={setLoading} />}
        </Container>
      </Fragment>
    </Context.Provider>
  );
};

export default App;
