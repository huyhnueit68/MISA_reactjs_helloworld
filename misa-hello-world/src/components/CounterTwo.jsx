import React, {useReducer} from 'react';

// import { Container } from './styles';
const initialState = {
    firstCount: 0,
    secondCount: 10
};

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, firstCount: state.firstCount + action.value};
        case 'decrement':
            return {...state,  firstCount: state.firstCount - action.value };
        case 'increment2':
            return {...state, secondCount: state.secondCount + action.value};
        case 'decrement2':
            return {...state, secondCount: state.secondCount - action.value};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

/**
 * 
 */
function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>{count.firstCount}</div>
            <div>{ count.secondCount }</div>
            <button onClick={() => {dispatch({type: 'increment', value: 1})}} >Increment</button>
            <button onClick={() => { dispatch({ type: 'decrement', value: 1 }) }}>Decrement</button>
            <button onClick={() => {dispatch({type: 'increment', value: 5})}} >Increment 5</button>
            <button onClick={() => { dispatch({ type: 'increment', value: 10 }) }} >Increment 10</button>
            <button onClick={() => { dispatch({ type: 'decrement', value: 5 }) }}>Decrement 5</button>
            <button onClick={() => { dispatch({ type: 'decrement', value: 10 }) }}>Decrement 10</button>
            <button onClick={() => {dispatch({type: 'increment2', value: 1})}} >Increment2 1</button>
            <button onClick={() => { dispatch({ type: 'decrement2', value: 1 }) }}>Decrement2 1</button>
            <button onClick={() => {dispatch({type: 'reset'})}}>Reset</button>
        </div>
    );
}

export default CounterTwo;