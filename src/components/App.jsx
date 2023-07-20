import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  function handleOnChange(event) {
    const value = event.target.value;
    setItem(value);
  }

  function handleOnClick() {
    setItems((prevValues) => {
      return [...prevValues, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleOnChange} type="text" value={item} />
        <button onClick={handleOnClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
          {console.log(items)}
          {items.map((i) => (
            <li> {i} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
