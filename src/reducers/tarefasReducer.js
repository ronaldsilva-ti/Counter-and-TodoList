import {
    AGREGAR_TAREFA
} from '../types';


//cada reducer tem seu proprio state
const INITIAL_STATE = {
    tarefas:[]    
}


export default function(state = INITIAL_STATE,action){
    switch(action.type){
        case AGREGAR_TAREFA :
            return {...state,tarefas:action.payload}
        default:
        return state;
    }
}

