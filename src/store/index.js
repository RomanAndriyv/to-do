import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    //compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

// sagaMiddleware.run();
    
export default store;