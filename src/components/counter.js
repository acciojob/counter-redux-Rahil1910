import {useSelector,useDispatch} from "react-redux";
import {increment,decrement} from "./store/actions"
import React from 'react';

const Counter = () =>{
    const count =  useSelector((state)=> state.count);
    const dispatch = useDispatch();

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=> dispatch(increment())}>increment</button>
            <button onClick={()=> dispatch(decrement())}>decrement</button>
        </div>
    )
}

export default Counter;
