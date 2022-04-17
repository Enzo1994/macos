export interface IformattedDate {
  month: number;
  day: number;
  week: string;
  hour: number;
  min: number;
}

export interface IWindowProps {
  id?: number;
  width: number;
  height: number;
  componentName?: string;
  resizeable?:boolean;
  shouldKeepRatio?: boolean;
}

export type Positions = {
  x?: number;
  y?: number;
  top?: number;
  left?: number;
};

export type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T; 
  // probably you might want to add the currentTarget as well
  // currentTarget: T;
}
// export function formatDate(): IformattedDate
