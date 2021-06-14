
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {saveUser, getUsers} from './middelwear/middelwear';
import user from './reduces/user';

const reducer= combineReducers({user});

const store= createStore(reducer, (applyMiddleware(saveUser, getUsers)));

window.store= store;
export default store;
