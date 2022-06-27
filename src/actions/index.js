export const addMessage = (text, type, id) => ({
    type: 'ADD_MESSAGE',
    payload: {
        text, type, id
    }
})

export const removeMessage = (id) => ({
    type: 'REMOVE_MESSAGE',
    payload: id
})
