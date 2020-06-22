import { Color } from "./model";

export interface Props {
  color: Color;
  onColorUpdated?: (color: Color) => void;
}
