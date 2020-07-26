import { Button, Modal } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import List from "./components/List";
import PopUp from "./components/PopUp";

function App() {
  const [items, setItems] = useState([
    { item: "Have BreakFast", description: "sdfghjkl", key: 1 },
    { item: "Play Pubg", description: "sdfghjklfghj", key: 2 },
    { item: "Watch Movie", description: "sdfghjklcvb", key: 3 },
  ]);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const addToList = (opts) => {
    const jsonItem = {
      item: opts.item,
      description: opts.description,
      key: Math.random().toString(),
    };
    setItems([jsonItem, ...items]);
    toggleModal();
  };

  const removeItem = (key) => {
    setItems(
      items.filter((item) => {
        return key !== item.key;
      })
    );
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <div className="todo-items">
        <List values={items} delete={removeItem} />
        <Button variant="primary" size="lg" onClick={toggleModal}>
          Add Item To List
        </Button>
        <PopUp show={modal} hide={toggleModal} submit={addToList} />
      </div>
    </div>
  );
}

export default App;
