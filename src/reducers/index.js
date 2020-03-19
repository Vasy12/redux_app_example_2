import { combineReducers } from 'redux';
import usersReducer        from './usersReducer.js';
import counterReducer      from './counterReducer.js';

export default combineReducers( {
                                  usersState: usersReducer,
                                  counterState: counterReducer,
                                } );
