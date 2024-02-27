import { contextFactory } from '@/app/_components/ContextFactory';

import { type LayoutState, type Action, INITIAL_STATE } from './reducer';

export const { useSelector, Context, useDispatch } = contextFactory<
    LayoutState,
    Action
>(INITIAL_STATE);
