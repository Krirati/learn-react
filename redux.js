const redux = require('redux');

const initialState = {
    count: 0
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1,
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1,
            }
        case 'SET':
            return {
                ...state,
                count: action.payload
            }
        default:
            return state;
    }
}

const store = redux.createStore(reducer)
console.log(store.getState());
store.subscribe(() => console.log(store.getState()))
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})
store.dispatch({type: 'SET', payload: 20})