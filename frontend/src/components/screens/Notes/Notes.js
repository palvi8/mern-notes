import React, { useEffect, useState } from "react";
import axios from "axios";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    await axios
      .get("http://localhost:4000/api/notes")
      .then((res) => setNotes(res.data));
  };

  return (
    notes.length > 0 &&
    notes.map((note) => (
      <div key={note._id}>
        <h3>{note.title}</h3>
        <span>{note.category}</span>
        <p>{note.content}</p>
      </div>
    ))
  );
};

export default Notes;
