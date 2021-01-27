
## setState
const state = context.getState();
state.permissions = action.payload;
context.setState({ ...state });

## patchState
const state = context.getState();
state.permissions = action.payload;
context.patchState(state);
