// IMPORTS
import TodoRow from './TodoRow';


// COMPONENT PART: lista con tareas (TodoRows)
/**
 * Componente que muestra una lista de tareas (todos).
 * Recibe un array de tareas y funciones para eliminar o alternar el estado de cada tarea.
 * 
 * @param {Object} props
 * @param {Array} props.todos - Array de objetos tarea, cada uno con información como id, texto, descripción, estado.
 * @param {function} props.onDeleteTodo - Función que elimina una tarea, recibe el id de la tarea.
 * @param {function} props.onToggleTodo - Función que alterna el estado de completado de una tarea, recibe el id.
 * 
 * @returns {JSX.Element} Elemento JSX con la lista de tareas renderizadas.
 */
const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => {
    return (
        <div>
            <h3>Tareas</h3>
            <ul>
                {todos.map(todo => (
                    <TodoRow
                        key={todo.id}           //Clave única para que React gestione bien la lista
                        todo={todo}             //Pasa el objeto tarea completo
                        onDelete={onDeleteTodo} //Pasa la función para eliminar la tarea
                        onToggle={onToggleTodo} //Pasa la función para alternar el estado de la tarea
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;