import {
    AGREGAR_TAREFA
} from '../types';

export function criarNovaTarefa(tarefa){
    return (dispatch) => {
        dispatch(agregarTarefa(tarefa))
    }

}

const agregarTarefa = (tarefas) => ({
    type:AGREGAR_TAREFA,
    payload:tarefas
})