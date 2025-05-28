import React, { useState } from "react";
import "./styles.css";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

export default function App() {
  const [note, setNote] = useState([]);
  const addNote = (newNote) => {
    setNote((prevNote) => {
      return [...prevNote, newNote];
    });
  };
  const deleteNote = (id) => {
    setNote((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="notes">
      {note.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      </div>
      <Footer />
    </div>
  );
}
