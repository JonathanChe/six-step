import * as actionTypes from '../constants/index';

export const addCard = (text, id) => ({
  type: actionTypes.ADD_CARD,
  text,
  id
});

export const addList = title => ({
  type: actionTypes.ADD_LIST,
  title,
});
