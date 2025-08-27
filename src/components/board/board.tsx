import { useContext } from "react";
import type { StickyItem } from "../../types";
import { Sticky } from "../sticky";
import { AppContext } from "../../app";
import { useBoardDragging } from "../../hooks";

import "./board.css";

export const Board = () => {
  const { stickies, dragEndPoint, dragStartPoint } = useContext(AppContext);
  const { onDragBoard, onDragEndBoard, onDragStartBoard } = useBoardDragging();

  return (
    <div className="board">
      <div
        draggable
        className="board-surface"
        onDragStart={onDragStartBoard}
        onDragEnd={onDragEndBoard}
        onDrag={onDragBoard}
      />
      <div className="stickies">
        {stickies.length > 0 &&
          stickies.map((sticky: StickyItem, key: number) => (
            <Sticky key={sticky.id} zIndex={key + 1} {...sticky} stuck />
          ))}
        {!!dragStartPoint && !!dragEndPoint && (
          <Sticky start={dragStartPoint} end={dragEndPoint} />
        )}
      </div>
    </div>
  );
};
