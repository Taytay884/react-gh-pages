import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { contacts, user } from './reducers/reducers';

const allReducers = combineReducers({
    contacts,
    user
});

export default function configStore() {
    return createStore(
        allReducers,
        applyMiddleware(thunk)
    );
}