import React from 'react'
import {useDispatch} from 'react-redux';

// actions from slice, like Action helpers
import { increment, decrement, reset } from './redux/counterSlice'

export default function Counter() {
    let dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(increment(5))}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}
