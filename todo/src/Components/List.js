import React from "react";
import { Card, ListGroup, Button } from "react-bootstrap";

export default function List(props) {
  console.log(props);

  const list = props.values.map((value) => {
    return (
      <Card
        bg="info"
        key={value.key}
        text="dark"
        style={{ width: "40rem", marginBottom: "30rem" }}
        className="mb-2"
      >
        <Card.Body>
          <Card.Title
            style={{ textDecoration: "underline", fontWeight: "bold" }}
          >
            {value.item}
            <Button
              onClick={() => {
                props.delete(value.key);
              }}
              variant="danger"
              value="Close"
              style={{ float: "right" }}
            >
              Delete
            </Button>
          </Card.Title>
          <Card.Text>{value.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  });

  return list;
}
