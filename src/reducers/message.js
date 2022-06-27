const messageReducer = (state = [], action) => {
    let newState = [...state]
    switch (action.type) {
    case 'ADD_MESSAGE':
        newState.unshift(action.payload)
        break
    case 'REMOVE_MESSAGE':
        newState = [...newState.filter((msg) => msg.id !== action.payload)]
        break
    default:
    }
    return newState
}

export default messageReducer
