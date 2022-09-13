import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";

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
                <h2>thi is the home file</h2>
              </div>
            }
          />

          {/* <Route index element={}/> */}

          <Route path="/checkout" element={<h1>This is checkout page</h1>} />
          <Route path="/login" element={<h1>This is Login page</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
