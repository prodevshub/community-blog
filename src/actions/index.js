export const addMessage = (text, type, state) => ({
    type: 'ADD_MESSAGE',
    payload: { text, type, state }
})

export const removeMessage = (id) => ({
    type: 'REMOVE_MESSAGE',
    payload: id
})

export const changeStateMessage = (id) => ({
    type: 'CHANGE_STATE_MESSAGE',
    payload: id
})
