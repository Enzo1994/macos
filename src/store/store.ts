import { action, observable } from "mobx";
import { createContext, useContext } from "react";
import FaceTime from "../components/facetime/facetime";
import { IWindowProps } from "../utils/types";

export class WindowStore {
  @observable windowList: IWindowProps[] = [];
  @observable componentList: any = { FaceTime: FaceTime };
  @action
  addToWindowList = (winInfo: IWindowProps) => {
    this.windowList.push(winInfo);
  };
}

export const WINDOW_STORE = "windowStore";

export const store = {
  [WINDOW_STORE]: new WindowStore(),
};

export const StoreContext = createContext(store);

const useStores = () => useContext(StoreContext);

export function useWindowStore() {
  const { windowStore } = useStores();
  return windowStore;
}
