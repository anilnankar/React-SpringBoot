import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
// import reducers from './reducers/image';
import reducers from '../redux/reducers';

// import { composeWithDevTools } from "redux-devtools-extension";

// const history = createHistory();
//const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk];

const store = createStore(
  combineReducers({
    reducers,
    router: routerReducer
  }),
  compose(applyMiddleware(...middlewares))
  // composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;
