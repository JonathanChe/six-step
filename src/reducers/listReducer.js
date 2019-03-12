import * as actionTypes from '../constants/index';

const initialState = [];

const listReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_CARD:
      return state;
    case actionTypes.ADD_LIST:
      return state;
    default:
      return state;
  };
};

export default listReducer;
