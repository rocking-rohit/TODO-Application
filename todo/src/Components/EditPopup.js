import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Example() {
  const [show, setShow] = false;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Button variant='primary' onClick={handleShow}>
      Launch demo modal
    </Button>
  );
}

export default Example;
