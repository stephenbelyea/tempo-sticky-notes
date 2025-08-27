import type { AppContextValue, CoordinatesItem, StickiesList } from "./types";

export const emptyCoordinates: CoordinatesItem = undefined;

export const emptyStickies: StickiesList = [];

export const emptyAppContext: AppContextValue = {
  stickies: [],
  setStickies: () => {},
  setDragStartPoint: () => {},
  setDragEndPoint: () => {},
};
