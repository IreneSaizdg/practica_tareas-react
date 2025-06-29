// IMPORT
import { useEffect, useReducer } from "react";
import { todoReducer } from "../reducers/todoReducer";



//HOOK: inicialización con el localStorage
/**
 * Función de inicialización que obtiene los todos desde el localStorage.
 * Si no hay datos guardados, retorna un array vacío.
 * @returns {Array} Lista inicial de tareas.
 */
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []; //Obtiene los datos desde el localStorage
};


// HOOK: gestionar los todos
/**
 * Hook personalizado para gestionar una lista de tareas (todos).
 *
 * Usa useReducer con un reducer externo y sincroniza con localStorage.
 * Devuelve el estado actual de las tareas y funciones para modificarlas.
 *
 * @returns {{
 *   todos: Array,
 *   handleNewTodo: Function,
 *   handleDeleteTodo: Function,
 *   handleToggleTodo: Function
 * }}
 */
export const useTodoReducer = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init) //useReducer recibe: reducer, estado inicial (vacío) y función de inicialización

    useEffect(() => {//Sincroniza los todos con el localStorage cada vez que cambian
        localStorage.setItem('todos', JSON.stringify(todos)); //SetItem guarda datos como string en el almacenamiento del navegador
    }, [todos])

    const handleNewTodo = (newTodo) => {    
        dispatch({                          //Un dispatch envía una acción al reducer (dice qué hacer con el estado actual)
            type: 'Add todo',               //Tipo de acción: Añade una tarea al estado
            payload: newTodo                //Datos que nececesita el reducer
        });
    };

    const handleDeleteTodo = (id) => {
        dispatch({
            type: 'Delete todo',            //Borra una tarea por id
            payload: id
        });
    };

    const handleToggleTodo = (id) => {
        dispatch({
            type: 'Toggle todo',            //Borra una tarea por id
            payload: id
        });
    };

    return{                                 //Retorna el estado y las funciones que controlan las tareas 
        todos,
        handleNewTodo, 
        handleDeleteTodo,
        handleToggleTodo
    };
};




/* TEORÍA:
    Este custom hook (useTodoReducer) encapsula toda la lógica necesaria para manejar una lista de tareas 
    (todos) usando useReducer y persiste las tareas en el localStorage. Proporciona funciones para:
        - Añadir una tarea (handleNewTodo)
        - Eliminar una tarea (handleDeleteTodo)
        - Marcar o desmarcar una tarea como completada (handleToggleTodo)
    También sincroniza automáticamente los datos con el almacenamiento local del navegador.
*/