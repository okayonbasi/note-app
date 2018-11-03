
import {ADD_NOTE} from '../actions/noteAction';

const initialState = [
    {
        text: "Use Redux",
        id: 0
    },
    {
        text: "Use React",
        id: 1
    }
]

const noteReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_NOTE:
            return state.concat([action.newNote]);
        default:
            return state;
    }

}


export default noteReducer;