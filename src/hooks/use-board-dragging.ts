import { useContext, useEffect, type DragEventHandler } from "react";
import { AppContext } from "../app";
import { emptyCoordinates } from "../vars";
import type { CoordinatesItem, StickyItem } from "../types";

export const useBoardDragging = () => {
  const {
    stickies,
    setStickies,
    dragEndPoint,
    dragStartPoint,
    setDragEndPoint,
    setDragStartPoint,
  } = useContext(AppContext);

  const updateAllStickies = (newSticky: StickyItem) => {
    setStickies([...stickies, newSticky]);
  };

  const onDragStartBoard: DragEventHandler<HTMLDivElement> = (e) => {
    const startPoint: CoordinatesItem = { x: e.pageX, y: e.pageY };
    setDragStartPoint(startPoint);
  };

  const onDragBoard: DragEventHandler<HTMLDivElement> = (e) => {
    const endPoint: CoordinatesItem = { x: e.pageX, y: e.pageY };
    setDragEndPoint(endPoint);
  };

  const onDragEndBoard: DragEventHandler<HTMLDivElement> = (e) => {
    const end: CoordinatesItem = { x: e.pageX, y: e.pageY };
    const newSticky = {
      id: (+new Date()).toString(36),
      start: dragStartPoint,
      end,
    };
    updateAllStickies(newSticky);
  };

  useEffect(() => {
    setDragStartPoint(emptyCoordinates);
    setDragEndPoint(emptyCoordinates);
  }, [stickies]);

  return {
    onDragBoard,
    onDragStartBoard,
    onDragEndBoard,
    dragStartPoint,
    dragEndPoint,
  };
};
