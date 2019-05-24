import {combineReducers} from 'redux';
import BuildingsReducer from './reducer-buildings';
import CounterReducer from './reducer-counter';

const allReducers = combineReducers({
  buildings: BuildingsReducer,
  counter: CounterReducer
});

export default allReducers
