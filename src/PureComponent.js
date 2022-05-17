import React, { Component } from "react";
import { useState } from "react";

const CreateElementComponent = React.createElement(
  "h2",
  null,
  "CreateElementComponent"
);

class ReactComponent extends Component {
  render() {
    return <h2>ReactComponent</h2>;
  }
}

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount((pv) => pv + 1);
  };
  const dec = () => {
    setCount((pv) => pv - 1);
  };
  return (
    <div>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <br />
      <h2>{count}</h2>
    </div>
  );
};

function PureComponent() {
  return (
    <div className="PureComponent">
      <ReactComponent />
      {CreateElementComponent}
      <h2>PureComponent</h2>
      <FunctionalComponent />
    </div>
  );
}

export default PureComponent;
