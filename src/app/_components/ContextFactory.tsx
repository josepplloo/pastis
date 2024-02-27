import { createContext, useContext } from "react";

export const contextFactory = <State, Action>(initialState: State) => {
  const Context = createContext({
    state: { ...initialState },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    dispatch: (action: Action) => {},
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const useSelector = (selector: (arg: State) => any) => {
    const { state } = useContext(Context);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return selector(state);
  };

  const useDispatch = () => {
    const { dispatch } = useContext(Context);
    return dispatch;
  };

  return { useSelector, Context, useDispatch };
};
