import React, { useEffect } from "react";
import { ColorBrowser } from "./color-browser";
import { ColorEditor } from "./color-editor";
import { Props } from "./Props";

export const ColorPicker: React.FC<Props> = (props: Props) => {
  return (
    <>
      <ColorBrowser color={props.color} onColorUpdated={props.onColorUpdated} />
      <ColorEditor color={props.color} onColorUpdated={props.onColorUpdated} />
    </>
  );
};
