// IMPORTS
import React, { useState } from 'react';



// COMPONENT PART: formulario de añadir tarea
/**
 * Componente de formulario para añadir una nueva tarea a la lista.
 * 
 * @component
 * @param {Function} onAddTodo - Función que se llama al enviar el formulario. Recibe el nuevo objeto de tarea.
 * @returns {JSX.Element} Formulario controlado con inputs para la tarea y su descripción.
 */
const AddTodoForm = ({ onAddTodo }) => {
    const [input, setInput] = useState(''); //Estado para el input principal (nombre de la tarea)
    const [desc, setDesc] = useState('');   //Estado para la descripción de la tarea

    const onFormSubmit = (event) => { //Manejo del envío de formulario
        event.preventDefault();
        if (input.trim() === '') return;

        const newTodo = { //Crea un nuevo objeto de tarea
            id: Date.now(),
            todo: input,
            description: desc,
            done: false,
            date: new Date(),
        };

        onAddTodo(newTodo); //Llama a la función padre para añadir la tarea
        
        setInput('');   //Limpian los campos del formulario (opcional)
        setDesc('');   
    };

    return (
        <form onSubmit={onFormSubmit}>
            <h2>Añadir tarea</h2>

            <input
                type="text"
                placeholder="Tarea"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <textarea
                placeholder="descripcion"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            />
            <button type="submit">Añadir Tarea</button>
        </form>
    );
};



export default AddTodoForm;