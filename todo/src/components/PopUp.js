import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function MyVerticallyCenteredModal(props) {
  const [input, setInput] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Modal
      size="md"
      show={props.show}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header onClick={() => props.hide()} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Item</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ flex: 1 }}>
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Enter ToDo"
        />
        <input
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Enter Description"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() =>
            props.submit({ item: input, description: description })
          }
        >
          Submit
        </Button>
        <Button variant="danger" onClick={() => props.hide()}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
