import { compose, createStore } from 'redux';
import rootReducer from '../reducers/index';

const store = createStore(
    //compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
    rootReducer
);

export default store;