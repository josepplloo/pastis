import { type User } from "@prisma/client";
import { type LocaleKeys } from "i18n-config"; 

const MENU_OPEN = "MENU_OPEN";

export interface LayoutState {
  [MENU_OPEN]: boolean;
  user: User;
  lang: LocaleKeys
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
  lang: 'en',
};

export enum ActionsTypes {
  SET_USER = "SET_USER",
  TOGGLE_MENU = "TOGGLE_MENU",
  SET_LANG = "SET_LANG",
}

interface SetUser {
  type: ActionsTypes.SET_USER;
  payload: User;
}

interface SetLang {
  type: ActionsTypes.SET_LANG;
  payload: LocaleKeys;
}

interface ToggleMenu {
  type: ActionsTypes.TOGGLE_MENU;
  payload: boolean;
}

export type Action = SetUser | ToggleMenu | SetLang;

export const actionCreators = {
  setUser: (data: User): SetUser => ({
    type: ActionsTypes.SET_USER,
    payload: data,
  }),
  toggleMenu: (data: boolean): ToggleMenu => ({
    type: ActionsTypes.TOGGLE_MENU,
    payload: data,
  }),
  setLang: (data: LocaleKeys): SetLang => ({
    type: ActionsTypes.SET_LANG,
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
    case ActionsTypes.SET_LANG: {
      return { ...state, lang: action.payload };
    }
    default: {
      return state;
    }
  }
};
