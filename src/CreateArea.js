import React, { useState } from "react";

export default function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };
  const handleSubmitNote = (event) => {
    if (note.title === "" && note.content === "") {
      alert("Please fill in both title and content.");
      return;
    } else if (note.title === "" ) {
      alert("Please fill the title value.");
      return;
    } else if (note.content === "") {
      alert("Please fill the content value.");
      return;
    }
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  };
  return (
    <div className="flex-grow max-w-6xl mx-auto">
      <form className="create-note">
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note"
          value={note.content}
          onChange={handleChange}
          rows="3"
        />
        <button onClick={handleSubmitNote}>Add</button>
      </form>
    </div>
  );
}
