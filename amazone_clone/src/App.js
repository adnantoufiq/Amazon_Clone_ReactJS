import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CheckOut from "./component/CheckOut";
import Header from "./component/Header";
import Home from "./component/Home";
import Login from "./component/Login";
import { useStateValue } from "./component/StateProvider";
import { auth } from "./firebase";

function App() {
  // pull reducer data layer
  const [{ basket }, dispatch] = useStateValue();

  // this useEffect code run only once for given conditions
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is loged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is loged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // class name = BEM naming convention
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="*" element={<div>404 not found</div>} />
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Home />
              </div>
            }
          />

          {/* <Route index element={}/> */}
          <Route
            path="/checkout"
            element={
              <div>
                <Header />
                <CheckOut />
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div>
                {/* <Header /> */}
                <Login />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
