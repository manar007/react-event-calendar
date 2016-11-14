import { combineReducers } from 'redux';
import EventsReducer from './EventsReducer'

const rootReducer = combineReducers({
  events: EventsReducer
});

export default rootReducer;
