import { useState } from "react";
const NewNote = ({ onSaveNewNote }) => {
    const [newNote, setNewNote] = useState('');
    const characterRemaining = 200;
    const changeHandler = (event) => {
        if(characterRemaining - event.target.value.length >= 0){
            setNewNote(event.target.value)
        }
    }
    const clickHandler = () => {
        if(newNote.trim().length > 0) {
            onSaveNewNote(newNote);
            setNewNote('')
        }
    }
    return (
        <div className="note new">
            <textarea
                rows='8'
                cols='10'
                placeholder="type your note here"
                value={newNote}
                onChange={changeHandler}
            ></textarea>
            <div className="note-footer">
                <small>{characterRemaining - newNote.length} characters remaining</small>
                <button className="save" onClick={clickHandler}>Save</button>
            </div>
        </div>
    )
}
export default NewNote;