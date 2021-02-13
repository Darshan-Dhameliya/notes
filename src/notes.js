import React, { useEffect, useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [getNote, setgetNotes] = useState("");

  function getNotes() {
    var storednotes = JSON.parse(localStorage.getItem("notes"));

    storednotes !== null && setNotes(storednotes);
  }

  function addNote(e) {
    e.preventDefault();
    if (getNote !== null && getNote.trim().length !== 0) {
      var newnotes = [...notes, getNote];
      setNotes(newnotes);
      localStorage.setItem("notes", JSON.stringify(newnotes));
      setgetNotes("");
    }
  }

  const Deletenote = (noteid) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this notes"
    );
    if (confirm) {
      var removenote = notes.filter((item, index) => index !== noteid);
      setNotes(removenote);
      localStorage.setItem("notes", JSON.stringify(removenote));
    }
  };

  const editNote = (notedescription, notindex) => {
    var person = prompt("Please enter your name", notedescription.trim());
    if (person !== null && person.trim().length !== 0) {
      var arr = [];
      for (var i = 0; i < notes.length; i++) {
        if (i === notindex) {
          notes[i] = person;
          setNotes(notes);
        }
        arr.push(notes[i]);
      }
      setNotes(arr);
      localStorage.setItem("notes", JSON.stringify(arr));
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-info text-center p-3 mt-3">Notes</h1>
        <div className="container">
          <div className="form-group mt-5">
            <form onSubmit={(e) => addNote(e)}>
              <div className="card">
                <h4>Add new Note</h4>
                <div className="d-flex">
                  <input
                    type="text"
                    value={getNote}
                    className="form-control"
                    onChange={(e) => setgetNotes(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="btn btn-outline-primary ml-2"
                  >
                    ADD
                  </button>
                </div>
              </div>
            </form>
            <div className="card mt-5">
              <h4>Notes</h4>
              <table className="table table-hover mb-0">
                {notes.map((note, index) => (
                  <tbody key={index}>
                    <tr>
                      <td
                        style={{ verticalAlign: "middle", textAlign: "center" }}
                        width="50"
                      >
                        {index + 1}
                      </td>
                      <td style={{ wordBreak: "break-all" }}>{note}</td>
                      <td width="169">
                        <button
                          onClick={() => editNote(note, index)}
                          className="btn btn-sm btn-outline-primary ml-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => Deletenote(index)}
                          className="btn btn-sm btn-outline-danger ml-2"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>{" "}
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
