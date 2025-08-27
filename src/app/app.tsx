import { useState } from "react";
import { Board } from "../components";
import { emptyCoordinates, emptyStickies } from "../vars";
import { type CoordinatesItem, type StickiesList } from "../types";
import { AppContext } from "./app-context";

import "./app.css";

export const App = () => {
  const [stickies, setStickies] = useState<StickiesList>(emptyStickies);
  const [dragStartPoint, setDragStartPoint] =
    useState<CoordinatesItem>(emptyCoordinates);
  const [dragEndPoint, setDragEndPoint] =
    useState<CoordinatesItem>(emptyCoordinates);

  return (
    <div className="app">
      <AppContext
        value={{
          stickies,
          setStickies,
          dragStartPoint,
          setDragStartPoint,
          dragEndPoint,
          setDragEndPoint,
        }}
      >
        <Board />
      </AppContext>
    </div>
  );
};
