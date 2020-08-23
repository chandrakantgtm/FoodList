import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FoodList from './FoodList';
import getFoodList from '../../services/redux/foodList/actions';

function mapStateToProps(state) {
  return {
    foodList: state.foodList.foodList,
  };
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getFoodList,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(FoodList);
