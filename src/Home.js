import React from "react";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favColor: "Green" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favColor: "Blue" });
    }, 2000);
  }
  render() {
    return (
      <div>
        <h1>This is the homepage</h1>
        <p>Hello from the homepage</p>
        <p>The name is: {this.props.name}</p>
        <p>The color is: {this.props.color}</p>
        <p>The track is: {this.props.track}</p>
        <p>Favorite color is: {this.state.favColor}</p>
      </div>
    );
  }
}
