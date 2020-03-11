import React, { Component } from "react";
import "./style.css";
import CalenderOverview from "./components/CalenderOverview";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <p>Tandartspraktijk BVT</p>
        </header>
        <div>
          <CalenderOverview />
        </div>
      </div>
    );
  }
}

export default App;
