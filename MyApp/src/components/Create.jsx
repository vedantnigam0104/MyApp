import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function Create(props) {
  const [note, setNote] = useState({
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Content"
        />
        <button onClick={submitNote}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default Create;
