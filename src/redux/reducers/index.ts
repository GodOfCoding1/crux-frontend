import { combineReducers } from 'redux';
import { addCard } from './cardReducer';

const rootReducer = combineReducers({
  addCard: addCard,
});

export default rootReducer;
