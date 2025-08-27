import { useContext, useRef, type DragEventHandler } from "react";
import { AppContext } from "../app";

export const useStickyDragging = () => {
  const { stickies, setStickies } = useContext(AppContext);
  const stickyRef = useRef<HTMLDivElement>(null);

  const onDragStickyEnd: DragEventHandler<HTMLDivElement> = (e) => {
    const sticky = stickyRef?.current;
    const updatedStickies = stickies.map((item) => {
      if (item.id !== sticky?.id) return item;

      // TODO :: Get the start coordinates based on the position within the
      // sticky boundaries where the drag action was engaged, so we prevent
      // the dropped sticky from jumping farther than intended on the page.

      const startX = e.pageX;
      const startY = e.pageY;
      const endX = (sticky?.clientWidth || 0) + startX;
      const endY = (sticky?.clientHeight || 0) + startY;

      return {
        ...item,
        start: { x: startX, y: startY },
        end: { x: endX, y: endY },
      };
    });

    setStickies(updatedStickies);
  };

  return {
    onDragStickyEnd,
    stickyRef,
  };
};
