import {GET_FOOD_LIST, FOOD_LIST_FAILED} from './types';
import Config from '../../Config';

function getFoodList() {
  return function (dispatch) {
    fetch(Config.url.getFoodList)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: GET_FOOD_LIST,
          payload: typeof data === 'object' ? data : {},
        });
      })
      .catch((error) =>
        dispatch({
          type: FOOD_LIST_FAILED,
          payload: error,
        }),
      );
  };
}

export default getFoodList;
