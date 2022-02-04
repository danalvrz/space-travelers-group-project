import { combineReducers } from 'redux';
import missions from './missions/missions';
import rockets from './rockets/rockets';

const rootReducer = combineReducers({
  missions,
  rockets,
});

export default rootReducer;
