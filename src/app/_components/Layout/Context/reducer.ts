import { User } from "@prisma/client";
const MENU_OPEN = "MENU_OPEN";

export interface LayoutState {
  [MENU_OPEN]: boolean;
  user: User;
}

export const INITIAL_STATE: LayoutState = {
  [MENU_OPEN]: false,
  user: {
    id: "",
    name: null,
    email: null,
    emailVerified: null,
    image: null,
  },
};

export enum ActionsTypes {
  SET_USER = "SET_USER",
  TOGGLE_MENU = "TOGGLE_MENU",
}

interface SetUser {
  type: ActionsTypes.SET_USER;
  payload: User;
}

interface ToggleMenu {
  type: ActionsTypes.TOGGLE_MENU;
  payload: boolean;
}

export type Action = SetUser | ToggleMenu;

export const actionCreators = {
  setUser: (data: User): SetUser => ({
    type: ActionsTypes.SET_USER,
    payload: data,
  }),
  toggleMenu: (data: boolean): ToggleMenu => ({
    type: ActionsTypes.TOGGLE_MENU,
    payload: data,
  }),
};

export const reducer = (state: LayoutState, action: Action): LayoutState => {
  switch (action.type) {
    case ActionsTypes.TOGGLE_MENU: {
      return { ...state, [MENU_OPEN]: action.payload };
    }
    case ActionsTypes.SET_USER: {
      return { ...state, user: action.payload };
    }
    default: {
      return state;
    }
  }
};
