export const ADD_NOTE = 'ADD_NOTE';

export function addNote(newNote){
    return{
        type : ADD_NOTE,
        newNote : newNote
    }
} 

