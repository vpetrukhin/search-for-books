import { combineReducers } from 'redux';
import { formReducer } from './reducers/reducers';

export const rootReducer = combineReducers({
  state: formReducer
});