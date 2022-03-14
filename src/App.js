import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/Navbar";
import VisitCard from "./components/VisitCard";
import Welcome from "./components/welcome";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<VisitCard />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
