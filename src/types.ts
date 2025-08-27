import type { Dispatch } from "react";

export type CoordinatesItem =
  | {
      x: number;
      y: number;
    }
  | undefined;

export type StickyItem = {
  start: CoordinatesItem;
  end: CoordinatesItem;
  id?: string;
};

export type StickiesList = StickyItem[] | [];

export interface StickyProps extends StickyItem {
  zIndex?: number;
  stuck?: boolean;
}

export type AppContextValue = {
  stickies: StickiesList;
  dragStartPoint?: CoordinatesItem;
  dragEndPoint?: CoordinatesItem;
  setStickies: Dispatch<StickiesList> | (() => void);
  setDragStartPoint: Dispatch<CoordinatesItem> | (() => void);
  setDragEndPoint: Dispatch<CoordinatesItem> | (() => void);
};
