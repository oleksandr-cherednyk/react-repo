import { SET_FILTER } from './actions';

const initialState = {
  users: [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'John' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
  ],
  filter: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
