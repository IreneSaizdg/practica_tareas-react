// COMPONENT PART: fila de 
/**
 * Componente que representa una fila individual de una tarea (todo).
 * Muestra el título, la descripción y botones para marcar como finalizada o eliminar.
 * 
 * @param {Object} props
 * @param {Object} props.todo - Objeto con la información de la tarea.
 * @param {string|number} props.todo.id - Identificador único de la tarea.
 * @param {string} props.todo.todo - Texto o título de la tarea.
 * @param {string} props.todo.description - Descripción adicional de la tarea.
 * @param {boolean} props.todo.done - Estado que indica si la tarea está completada.
 * @param {function} props.onDelete - Función que se llama al eliminar la tarea, recibe el id.
 * @param {function} props.onToggle - Función que se llama para alternar el estado 'done', recibe el id.
 * 
 * @returns {JSX.Element} Elemento JSX que representa una tarea con acciones.
 */
const TodoRow = ({ todo, onDelete, onToggle }) => {
    return (
        <li>
            <strong>{todo.todo}</strong> - {todo.description}
            <button onClick={() => onToggle(todo.id)}> 
                {todo.done ? 'Finalizada' : 'Pendiente'}
            </button>
            <button onClick={() => onDelete(todo.id)}>
                Eliminar
            </button>
        </li>
    );
};

export default TodoRow;
