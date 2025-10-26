import { combineReducers } from 'redux';
import { SET_USER_INFO } from './actions';

const initialState = { name: 'Guest', status: 'offline' };

function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER_INFO:
      return { ...state, name: action.payload.name, status: action.payload.status };
    default:
      return state;
  }
}

export default combineReducers({ user });
