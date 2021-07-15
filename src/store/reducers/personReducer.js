import { SET_DATA, SET_LINK } from '../actionTypes';

const initialState = {
    data: [],
    link: ''
}

function personReducer(state = initialState, action) {
    if (action.type === SET_DATA) {
        return {...state, data: action.payload}
    } else if (action.type === SET_LINK) {
        return {...state, link: action.payload}
    }
    return state;
}

export default personReducer;