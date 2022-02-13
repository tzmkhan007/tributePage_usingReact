import React, { Component } from "react";
import Lata_Mangeshkar from "./LataDi";
import style from "./style.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Container">
        <Lata_Mangeshkar />
      </div>
    );
  }
}

export default App;
