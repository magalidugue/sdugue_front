import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/Navbar";
import VisitCard from "./components/VisitCard";
import Welcome from "./components/welcome";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Welcome />
        <VisitCard />
      </div>
    );
  }
}

export default App;
