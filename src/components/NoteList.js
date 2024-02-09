
import NewNote from "./NewNote";
import Note from "./Note";
const NoteList = ({ nl, onSaveNewNote, onDeleteNote }) => {
    return (
        <div className='notes-list'>
            <NewNote onSaveNewNote={onSaveNewNote} />
            {
                nl.map((n) => (
                    <Note id={n.id} text={n.text} date={n.date} onDeleteNote={onDeleteNote}/>
                ))
            }
        </div>
    )
}
export default NoteList;