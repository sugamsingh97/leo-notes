import { useState } from 'react';
import { nanoid } from 'nanoid';
import NoteList from './components/NoteList';
import Search from './components/Search';
import Header from './components/Header';
const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'Hey this is my first time doing this',
      date: '11/11/11'
    },
    {
      id: nanoid(),
      text: 'Hey this is my 2 time doing this',
      date: '12/11/11'
    },
    {
      id: nanoid(),
      text: 'Hey this is my first 3 doing this',
      date: '13/11/11'
    }
  ]);
  const onSaveNewNote = (data) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: data,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes);
  }
  const onDeleteNote = (id) => {
    const newNotes = notes.filter((n) => n.id !== id)
    setNotes(newNotes);
  }
  const [searchTerm, setSearchTerm] = useState('');
  console.log(searchTerm);
  
  return (
    <div className="container">
      <Header />
      <Search changeHandler={setSearchTerm}/>
      <NoteList nl={notes.filter((note) => (note.text.toLowerCase().includes(searchTerm)))} onSaveNewNote={onSaveNewNote} onDeleteNote={onDeleteNote}/>
    </div>
  )
}
export default App;