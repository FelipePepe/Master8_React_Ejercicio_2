import React from "react";
import { Props } from "./props";
export const ColorBrowser: React.FC<Props> = (props) => {
  const divStyle: React.CSSProperties = {
    width: "11rem",
    height: "7rem",
    backgroundColor: `rgb(${props.color.red},${props.color.green}, ${props.color.blue})`,
  };

  return <div style={divStyle} />;
};
