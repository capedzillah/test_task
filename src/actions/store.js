export const onUpdate = store => {
    return {
        type: 'ADD_STORE',
        payload: store
    }
}
export const sortemenents = store => {
    return {
        type: 'SORT_ELEMENTS',
        payload: store
    }
}