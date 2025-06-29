// REDUCER: gestionar el todoList
/**
 * Reducer para gestionar el estado de la lista de tareas (todos).
 *
 * @param {Array} state - Estado actual de la lista de todos.
 * @param {Object} action - Acción que describe el cambio a realizar.
 * @param {string} action.type - Tipo de acción: 'Add todo', 'Delete todo', 'Toggle todo'.
 * @param {*} action.payload - Datos necesarios para ejecutar la acción (puede ser un todo o un id).
 * @returns {Array} Nuevo estado tras aplicar la acción correspondiente.
 */
export const todoReducer = (state = [], action) => { //El estado (state) es un array de objetos, cada uno con estructura como { id, description, done }.
    switch (action.type) {
        case 'Add todo':                        //Agregar nueva tarea al estado
            return [...state, action.payload];  // Devuelve un nuevo array con la tarea nueva al final

        case 'Delete todo':                     //Eliminar tarea por id
            return state.filter(todo => todo.id !== action.payload)  //Filtra el array, excluyendo la tarea cuyo id coincida con el payload

        case 'Toggle todo':
            return state.map(todo =>            //Cambiar el estado de completado de una tarea
                todo.id === action.payload ? 
                    { ...todo, done: !todo.done } : 
                    todo //Mapea todos los todos, y cuando encuentra el que coincide con el ID, cambia su estado
            );
        
        default:                                //Si la accion no coincide con ningún caso devuelve el estado sin cambios
            return state;   
    }
    
}





/* TEORÍA:
    Un reducer es una función pura usada en React (especialmente con useReducer) para manejar el estado de forma predecible.
    En este caso, todoReducer gestiona una lista de tareas (todos), permitiendo:
        - Añadir una tarea
        - Eliminar una tarea
        - Marcar una tarea como completada (o desmarcarla)
        - Cada acción se define mediante un objeto action con un type y un payload.
*/



