import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import List from "./components/List";
import PopUp from "./components/PopUp";

function App() {
  const [items, setItems] = useState([
    { item: "Take Bath", description: "Need To Take a shower", key: 1 },
    { item: "Eat Lunch", description: "Need To eat Paneer", key: 2 },
    { item: "Play Soccer", description: "Need to Play Crazy", key: 3 },
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
