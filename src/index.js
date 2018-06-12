import React from "react";
import { render } from "react-dom";
import Loading from "./Loading";
import Loadable from "react-loadable";

const LoadableHello = Loadable({
  loader: () => import("./Hello"),
  loading: Loading
});

class App extends React.Component {
  callChildMethod = () => {
    console.log(this.myRef);
  };
  render() {
    return (
      <div style={styles}>
        <button onClick={this.callChildMethod}>child method</button>
        <LoadableHello name="Loadable" ref={el => (this.myRef = el)} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
