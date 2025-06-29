import React from 'react';
import { Todos } from './components/Todos';


const App = () => {
    return (
        <>
            <header>
                <h1>Práctica Todo List</h1>
            </header>
            <main>
                <Todos />
            </main>
            <footer>
                Práctica Todo List
            </footer>
        </>
    );
};

export default App;