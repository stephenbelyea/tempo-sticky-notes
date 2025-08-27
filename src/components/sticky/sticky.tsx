import type { FunctionComponent } from "react";
import type { StickyProps } from "../../types";

import "./sticky.css";
import { useStickyDragging } from "../../hooks";

export const Sticky: FunctionComponent<StickyProps> = ({
  id = "temp",
  end,
  start,
  zIndex = 999,
  stuck = false,
}) => {
  const { onDragStickyEnd, stickyRef } = useStickyDragging();

  if (!end || !start) return null;

  return (
    <div
      id={id}
      draggable
      ref={stickyRef}
      onDragEnd={onDragStickyEnd}
      className={`sticky ${stuck ? "stuck" : "free"}`}
      style={{
        zIndex,
        top: `${start.y}px`,
        left: `${start.x}px`,
        height: `${end.y - start.y}px`,
        width: `${end.x - start.x}px`,
      }}
    />
  );
};
