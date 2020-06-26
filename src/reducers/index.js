import { combineReducers } from 'redux';
import tarefasReducer from './tarefasReducer';
import counterReducer from './counterReducer';

export default combineReducers({
    tarefa:tarefasReducer,
    contador:counterReducer
})
