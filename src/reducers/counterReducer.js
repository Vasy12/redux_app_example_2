import ACTION_TYPES from '../actions/actionTypes.js';

const initialState = {
  value: 0,
  step: 1,
};

export default function counterReducer (state = initialState, action) {
  switch (action.type) {

    case ACTION_TYPES.INCREMENT_COUNTER:
      return {
        ...state,
        value: state.value + state.step,
      };
    case ACTION_TYPES.DECREMENT_COUNTER:
      return {
        ...state,
        value: state.value - state.step,
      };
    default:
      return state;
  }
}