import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
    sidebarOpen: false
};

const burguerHandler = (state, action) => {
    return updateObject(state, {
        sidebarOpen: !state.sidebarOpen
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.HEADER_BURGUER_HANDLER: return burguerHandler(state, action)
        default: return state
    }
};

export default reducer;