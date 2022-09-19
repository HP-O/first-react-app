import React from "react";
import { ClassWork } from "./ClassWork";
import { Home } from "./Home";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Hello From My React App</h1>
        <Home name="Hauwa" color="Red" track="Fullstack" />
        <ClassWork id="HP" type="Dell" />
      </div>
    );
  }
}

export default App;
