import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Notes.css";
import Draggable from "react-draggable";
import { v4 as uuidv4 } from "uuid";

import Auth from "../utils/auth";

var randomColor = require("randomcolor");

function Notes() {
  const styles = {
    save__note__button: {
      color: 'white',
      background: 'linear-gradient(90deg, rgba(93, 12, 255, 1) 0%, rgba(155, 0, 250, 1) 100%) ',
    }
  }
  const [item, setItem] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  const newItem = () => {
    if (item.trim() !== "") {
      const newItem = {
        id: uuidv4(),
        item: item,
        color: randomColor({
          luminosity: "light",
        }),
        defaultPos: { x: 100, y: 0 },
      };
      setItems((items) => [...items, newItem]);
      setItem("");
    }
  };

  const keyPress = (event) => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      newItem();
    }
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const updatePos = (data, index) => {
    let newArr = [...items];
    newArr[index].defaultPos = { x: data.x, y: data.y };
    setItems(newArr);
  };

  const deleteNote = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <div className="NoteApp">
            <form
              className="flex-row justify-center justify-space-between-md align-center"
            >
              <div className="new-item col-12 col-lg-9">
                <input
                  value={item}
                  onChange={(e) => setItem(e.target.value)}
                  placeholder="Enter note..."
                  className="form-input w-100"
                  style={{ lineHeight: '1.5', resize: 'vertical', border: '2px solid #5d0cff', }}
                  onKeyPress={(e) => keyPress(e)}
                />
              </div>
              <div className="col-12 col-lg-3">
                <button className="save__note__button btn btn-block py-3" style={styles.save__note__button} onClick={newItem}>Add Note</button>
              </div>
            </form>
            <div id="items">
              {items.map((item, index) => {
                return (
                  <Draggable
                    key={item.id}
                    defaultPosition={item.defaultPos}
                    onStop={(e, data) => {
                      updatePos(data, index);
                    }}
                  >
                    <div
                      style={{ backgroundColor: item.color }}
                      className="box"
                    >
                      <p style={{ margin: 0 }}>{item.item}</p>
                      <button id="delete" onClick={(e) => deleteNote(item.id)}>
                        X
                      </button>
                    </div>
                  </Draggable>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <p>
          You need to be logged in to write and save notes. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )
      }
    </div >
  );
}

export default Notes;
