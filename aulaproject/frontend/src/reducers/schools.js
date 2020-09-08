import { GET_SCHOOLS, GET_GRADES } from "../actions/types.js";

const initialState = {
    schools: [],
    grades: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_SCHOOLS:
            return {
                ...state,
                schools: action.payload
            };
        case GET_GRADES:
            return {
                ...state,
                grades: action.payload
            };
        default:
            return state;
    }

}