import { combineReducers } from 'redux';
import  tableReducer  from './tableReducer';
import waffleAppReducer from './waffleAppReducer';
import customViewsReducer from './customViewsReducer';
import customiseReducer from './customiseReducer';
import schedulerReducer from './schedulerReducer';
import navigationReducer from './navigationReducer';
import experienceReducer from './experienceReducer';
import toggleReducer from './toggleReducer';

export default combineReducers({

  waffleApp: waffleAppReducer,
  table: tableReducer,
  customise: customiseReducer,
  customViews: customViewsReducer,
  scheduler:schedulerReducer,
  navigationReducer: navigationReducer,
  experience:experienceReducer,
  toggle:toggleReducer
});
