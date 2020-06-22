import React from "react";
import { Props } from "./Props";

const classes = require("./color-editor.css");

export const ColorEditor: React.FC<Props> = (props) => {
  const { color, onColorUpdated } = props;

  return (
    <div className={classes.picker}>
      <div>
        Red:
        <input
          type="range"
          min="0"
          max="255"
          value={color.red}
          onChange={(event) =>
            props.onColorUpdated({
              red: +event.target.value,
              green: props.color.green,
              blue: props.color.blue,
            })
          }
        />
      </div>
      <div>
        Green:
        <input
          type="range"
          min="0"
          max="255"
          value={color.green}
          onChange={(event) =>
            props.onColorUpdated({
              red: props.color.red,
              green: +event.target.value,
              blue: props.color.blue,
            })
          }
        />
      </div>
      <div>
        Blue:{" "}
        <input
          type="range"
          min="0"
          max="255"
          value={color.blue}
          onChange={(event) =>
            props.onColorUpdated({
              red: props.color.red,
              green: props.color.green,
              blue: +event.target.value,
            })
          }
        />
      </div>
    </div>
  );
};
