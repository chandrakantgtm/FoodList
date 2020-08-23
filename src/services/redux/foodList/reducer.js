import {GET_FOOD_LIST, FOOD_LIST_FAILED} from './types';

const initialState = {
  foodList: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FOOD_LIST:
      return {
        ...state,
        foodList: action.payload,
      };
    case FOOD_LIST_FAILED:
      return {
        ...state,
        foodList: '',
      };
    default:
      return state;
  }
}
