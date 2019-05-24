import React from "react";

import { Button, ButtonGroup } from "react-bootstrap";

import { options } from "../optionsData";

export default class Options extends React.Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
  }

  render() {
    let buttonOn = "success";
    let buttonOff = "info";
    let buttonSize = "";

    return (
      <div>
        {/* Tree Size */}

        <ButtonGroup>
          {Object.keys(options.sizeTree).map(key => (
            <Button
              key={key}
              bsStyle={options.size == key ? buttonOn : buttonOff}
              onClick={() => (options.size = key)}
            >
              {options.sizeTree[key]}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    );
  }
}
