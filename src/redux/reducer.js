const initalState = {
    todos: [ '1' ]
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case 'ADD' : {
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        }
        default: {
            return {
                todos: state.todos
            }
        }
    }
}

export default reducer;