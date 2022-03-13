import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/Navbar";
import VisitCard from "./components/VisitCard";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <VisitCard />
      </div>
    );
  }
}

export default App;
