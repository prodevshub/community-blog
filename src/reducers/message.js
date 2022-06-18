const messageReducer = (state = [], action) => {
    const newState = [...state]
    switch (action.type) {
    case 'ADD_MESSAGE':
        newState.push(action.payload)
        break
    case 'REMOVE_MESSAGE':
        newState.splice(action.payload, 1)
        break
    case 'CHANGE_STATE_MESSAGE':
        newState.splice(action.payload, 1, {
            text: newState[action.payload].text,
            type: newState[action.payload].type,
            state: false
        })
        break
    default:
    }
    return newState
}

export default messageReducer
