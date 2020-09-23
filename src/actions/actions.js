export const ADD_PART = 'ADD_PART';
export const REMOVE_PART = 'REMOVE_PART';


export const addPart = (add) => {
    return {
        type: ADD_PART,
        payload: add
    }
}

export const removePart = (add) => {
    return {
        type: REMOVE_PART,
        payload: add
    }
}