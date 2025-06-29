

export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'Add todo':
            return [...state, action.payload];

        case 'Delete todo':
            return state.filter(todo => todo.id !== action.payload)

        case 'Toggle todo':
            return state.map(todo => 
                todo.id === action.payload ? { ...todo, done: !todo.done } : todo
            );
        
        default: 
            return state;
    }
    
}
