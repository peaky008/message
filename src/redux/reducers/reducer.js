import { combineReducers } from 'redux';
import wordDataReducer from './wordDataReducer';
import historyReducer from './historyReducer';

export default combineReducers({
    wordData: wordDataReducer,
    search: historyReducer
  });