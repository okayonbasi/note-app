import React, { Component } from 'react';
import '../assets/style/noteItem.sass';

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

        const noteItem = this.state.notes.map(note => <li key={note.id} className={"none"}>{note.baslik}</li>);

        return (
            <div>
                {noteItem}
            </div>
        );
    }
}

export default NoteList;