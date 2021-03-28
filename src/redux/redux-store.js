import { applyMiddleware, combineReducers, createStore } from 'redux';
import usersReducer from './users-reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  users: usersReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store