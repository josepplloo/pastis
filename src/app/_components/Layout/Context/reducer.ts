import { User } from "@prisma/client";

const isMenuOpen = false;
const user = { } as User

export interface LayoutState {
  isMenuOpen: boolean;
  user: User;
};

export const INITIAL_STATE: LayoutState = {
  isMenuOpen,
  user,
};

export enum ActionsTypes {
  SET_USER = 'SET_USER',
  SET_OPEN_MENU = 'SET_OPEN_MENU'
};

interface SetUser {
  type: ActionsTypes.SET_USER;
  payload: User;
};

interface SetOpenMenu {
  type: ActionsTypes.SET_OPEN_MENU;
  payload: boolean;
};

export type Action = 
  SetUser |
  SetOpenMenu;

export const ActionCreators = {
  setUser: (data: User): SetUser => ({
    type: ActionsTypes.SET_USER,
    payload: data
  }),
  setOpenMenu: (data: boolean): SetOpenMenu => ({
    type: ActionsTypes.SET_OPEN_MENU,
    payload: data
  })
};

export const reducer = (
  state: LayoutState,
  action: Action
): LayoutState => {
  switch (action.type) {
    case ActionsTypes.SET_OPEN_MENU: {
      return {...state, isMenuOpen: action.payload}
    }
    case ActionsTypes.SET_USER: {
      return {...state, user: action.payload}
    }
    default:
      return state;
  }
}
