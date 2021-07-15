import { createStore, combineReducers, applyMiddleware } from 'redux';
import personReducer from './reducers/personReducer';
import ReduxThunk from 'redux-thunk';

const reducers = combineReducers({
    personReducer
})

const middleware = applyMiddleware(ReduxThunk);

const store = createStore(reducers, middleware);

export default store;
