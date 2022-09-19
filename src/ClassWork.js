import React from "react";

export class ClassWork extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>This is the classwork</h1>
        <p>Hello from the classwork</p>
        <p>The id is: {this.props.id}</p>
        <p>The type is: {this.props.type}</p>
      </div>
    );
  }
}
