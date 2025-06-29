import { useEffect, useReducer } from "react";
import { todoReducer } from "../reducers/todoReducer";



//Inicialización con localStorage
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};


export const useTodoReducer = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleNewTodo = (newTodo) => {
        dispatch({
            type: 'Add todo',
            payload: newTodo
        });
    };

    const handleDeleteTodo = (id) => {
        dispatch({
            type: 'Delete todo',
            payload: id
        });
    };

    const handleToggleTodo = (id) => {
        dispatch({
            type: 'Toggle todo',
            payload: id
        });
    };

    return{
        todos,
        handleNewTodo, 
        handleDeleteTodo,
        handleToggleTodo
    };
};


