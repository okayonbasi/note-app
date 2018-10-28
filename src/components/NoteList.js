import React, { Component } from 'react';

const NoteItem = this.state.notes.map(note => note.baslik);

class NoteList extends Component {

    state = {
        notes:[
            {
               id:1,
               baslik: "Başlık 1",
               note: "Başlık 1'in  Notu"     
            },
            {
                id: 2,
                baslik: "Başlık 2",
                note: "Başlık 2'in  Notu"   
            }
         ]
    }

    render() {

        return (
            <div>
                {NoteItem}
            </div>
        );
    }
}

export default NoteList;