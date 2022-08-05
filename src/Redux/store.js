import { createStore } from 'redux';

const reducer = state => state;

export const store = createStore(reducer, { name: '' });

// store.dispatch({type: })
