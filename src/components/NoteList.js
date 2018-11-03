import React, { Component } from 'react';
import '../assets/style/noteItem.sass';
import {connect} from 'react-redux';
import {addNote} from '../actions/noteAction';
import { FaArrowCircleRight } from 'react-icons/fa';

class NoteList extends Component {

    
    onAddNote = () => {
        this.props.addNote({text: "test", id:2});
    }
    
    render() {
        console.log(this.props)
        const noteItem = this.props.noteReducer.map(note => <li key={note.id} className={"none"}>{note.text} <FaArrowCircleRight /></li>);
        return (
            <div>
                <button onClick={this.onAddNote}>Add new Note</button>
                {noteItem}

            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = {
    addNote : addNote
}


export default connect(mapStateToProps, mapDispatchToProps)(NoteList);