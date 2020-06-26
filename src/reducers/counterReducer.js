import {
    AUMENTAR,
    DIMINIUR
} from '../types';


export default function(state = 0, action){
    switch(action.type){
            case AUMENTAR :
                return state + 1;
            case  DIMINIUR :
                return state - 1;
        default:
            return state;
    }
}