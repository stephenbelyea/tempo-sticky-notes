import { useEffect, useState, type DragEventHandler } from "react";

import "./board.css";

type CoordinatesType = number[] | [];

type StickyType = {
  start: CoordinatesType;
  end: CoordinatesType;
  id: string;
};

type StickiesListType = StickyType[] | [];

const emptyCoordinates: CoordinatesType = [];
const emptyStickies: StickiesListType = [];

export const Board = () => {
  const [allStickies, setAllStickies] = useState(emptyStickies);
  const [dragStartPoint, setDragStartPoint] = useState(emptyCoordinates);
  const [dragEndPoint, setDragEndPoint] = useState(emptyCoordinates);

  const updateAllStickies = (newSticky: StickyType) => {
    setAllStickies([...allStickies, newSticky]);
  };

  const onDragStartBoard: DragEventHandler<HTMLDivElement> = (e) => {
    setDragStartPoint([e.pageY, e.pageX]);
  };

  const onDragBoard: DragEventHandler<HTMLDivElement> = (e) => {
    setDragEndPoint([e.pageY, e.pageX]);
  };

  const onDragEndBoard: DragEventHandler<HTMLDivElement> = (e) => {
    const newSticky = {
      start: dragStartPoint,
      end: [e.pageY, e.pageX],
      id: (+new Date()).toString(36),
    };
    updateAllStickies(newSticky);
  };

  useEffect(() => {
    setDragStartPoint(emptyCoordinates);
    setDragEndPoint(emptyCoordinates);
  }, [allStickies]);

  useEffect(() => {}, [dragEndPoint]);

  return (
    <div className="board">
      <div
        className="board-surface"
        draggable
        onDragStart={onDragStartBoard}
        onDragEnd={onDragEndBoard}
        onDrag={onDragBoard}
      />
      <div className="stickies">
        {allStickies.length > 0 &&
          allStickies.map((sticky: StickyType, key: number) => (
            <div
              key={sticky.id}
              className="sticky stuck"
              style={{
                zIndex: key + 1,
                top: `${sticky.start[0]}px`,
                left: `${sticky.start[1]}px`,
                height: `${sticky.end[0] - sticky.start[0]}px`,
                width: `${sticky.end[1] - sticky.start[1]}px`,
              }}
            />
          ))}
        {dragStartPoint.length > 0 && dragEndPoint.length > 0 && (
          <div
            className="sticky create"
            style={{
              zIndex: 999,
              top: `${dragStartPoint[0]}px`,
              left: `${dragStartPoint[1]}px`,
              height: `${dragEndPoint[0] - dragStartPoint[0]}px`,
              width: `${dragEndPoint[1] - dragStartPoint[1]}px`,
            }}
          />
        )}
      </div>
    </div>
  );
};
