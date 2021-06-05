import React, { useState } from "react";
import "./ToDo.css";
const ToDo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((element, index) => {
      return index !== id;
    });
    setItems(updatedItems);
  };

  const removeAll = () => {
    setItems([]);
  };

  return (
    <>
      <div>
        <h1 className="Header-One">ToDo List</h1>
        <h4 className="Header-Two">Add your List Here</h4>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter List"
          vlaue={inputData}
          onChange={(e) => setInputData(e.target.value)}
          className="input"
        />
        <button onClick={addItem} className="one-btn">
          Add
        </button>
      </div>
      <div className="one-div">
        {items.map((element, index) => {
          return (
            <div key={index}>
              {element}
              <button className="one-btn" onClick={() => deleteItem(index)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <button className="one-btn" onClick={removeAll}>
          All Clear
        </button>
      </div>
    </>
  );
};
export default ToDo;
