import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const enhancer = compose(
  applyMiddleware(thunk)
);

export default function configureStore(initialState){
  const store = createStore(reducer, initialState, enhancer);
  return store;
}
