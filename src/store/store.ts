import { action, makeObservable, observable } from "mobx";
import { createContext, useContext } from "react";
import { IWindowProps } from "../utils/types";

let id = 0;
export class WindowStore {
  count = 0;
  windowList: IWindowProps[] = [];

  constructor() {
    makeObservable(this, {
      windowList: observable,
      addToWindowList: action,
      removeWindowItem: action,
    });
  }

  addToWindowList = (winInfo: IWindowProps) => {
    this.windowList.push({ ...winInfo, id: id++ });
  };

  removeWindowItem = (id: number) => {
    const idx = this.windowList.findIndex((item) => id === item.id);
    if (idx !== -1) {
      this.windowList.splice(idx, 1);
    }
  };
}

export const WINDOW_STORE = "windowStore";

export const store = {
  [WINDOW_STORE]: new WindowStore(),
};

export const StoreContext = createContext(store);

export const useStores = () => useContext(StoreContext);

export function useWindowStore() {
  const { windowStore } = useStores();
  return windowStore;
}
