import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Create from "./Create";
import Notes from "./Notes";
import NAVBAR from "./NAVBAR";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <NAVBAR />
      <Create onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Notes
            key={index}
            id={index}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
