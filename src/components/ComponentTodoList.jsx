// IMPORTS
import { useTodoReducer } from '../hooks/useTodoReducer';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';


// COMPONENT: Todo List Section
/**
 * Componente principal que organiza la lista de tareas.
 * Conecta el formulario y la lista con la lógica del estado (usando useTodoReducer).
 * 
 * @returns {JSX.Element} Estructura principal de la aplicación TodoList.
 */
const ComponentTodoList = () => {
    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodoReducer(); //Usamos el hook personalizado que maneja todo el estado y las funciones de dispatch

    return (
        <div className="container">
            <h1>Lista de tareas</h1>

            <AddTodoForm onAddTodo={handleNewTodo} />
            
            <TodoList
                todos={todos}
                onDeleteTodo={handleDeleteTodo}
                onToggleTodo={handleToggleTodo}
            />
        </div>
    );
};

export default ComponentTodoList;







// FULL COMPONENT (sin despiezar) 
/*
import React, { useState } from 'react';
import { useTodoList } from '../hooks/useTodoReducer';

export const Todos = () => {
    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodoList();

    const [input, setInput] = useState('');
    const [desc, setDesc] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (input.trim() === '') return;

        const newTodo = {
            id: Date.now(),
            todo: input,
            description: desc,
            done: false,
            date: new Date(),
        };

        handleNewTodo(newTodo);
        setInput('');
        setDesc('');
    };

    return (
        <div className="container">
            <h2>Añadir tarea</h2>

            <form onSubmit={onFormSubmit}>
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

            <h3>Tareas</h3>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <strong>{todo.todo}</strong> - {todo.description}
                        <button
                            onClick={() => handleToggleTodo(todo.id)}
                        >
                            {todo.done ? 'Finalizada' : 'Pendiente'}
                        </button>
                        <button
                            onClick={() => handleDeleteTodo(todo.id)}
                        >
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
*/
