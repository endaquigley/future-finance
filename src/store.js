import { createStore, combineReducers, applyMiddleware } from 'redux';
import search from './reducers/search';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  search
});

const middleware = applyMiddleware(thunk);

const store = createStore(
  reducers,
  middleware
);

export default store;
