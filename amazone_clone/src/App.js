import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";

function App() {
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
                <h1>This is checkout page</h1>
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div>
                <Header />
                <h1>This is Login page</h1>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
