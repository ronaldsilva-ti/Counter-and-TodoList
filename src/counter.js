import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {
    AUMENTAR,
    DIMINIUR
} from './types';

export default function Counter(){
    const valor = useSelector(state => state.contador);
    const dispatch = useDispatch();
      

    function diminui(){
        dispatch({
            type:DIMINIUR
        });
    }
    return(
        <>
            <h1>Contador</h1>
             <p>{valor}</p>
            <button onClick={() => dispatch({type:AUMENTAR}) }>+</button>
            <button onClick={diminui}>-</button>
        </>
    )
}