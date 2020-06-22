import * as React from "react";
import { Color, ColorPicker } from "./components";

const classes = require("./styles.css");

export const App = () => {
  const [chosenColor, setChosenColor] = React.useState<Color>({
    red: 10,
    green: 20,
    blue: 120,
  });

  return (
    <div className={classes.app}>
      <ColorPicker
        color={chosenColor}
        onColorUpdated={(color) => setChosenColor(color)}
      />
    </div>
  );
};
