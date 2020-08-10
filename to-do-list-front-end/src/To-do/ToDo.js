import React, { useState, useEffect } from "react";
import { Nav, Form, Card, Button, Modal } from "react-bootstrap"

export default function Todo() {
  const [show, setShow] = useState(false);
  const [taskContent, setTaskContent] = useState("");
  const [taskVisible, setTaskVisible] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    setShow(false)
    if (taskContent !== "") {

    }
  };

  const handleTaskContent = (e) => {
    setTaskContent(e.target.value);
  }

  useEffect(() => {
    fetch(`http://localhost:3004/tasks/`)
      .then(response => response.json())
      .then(data => {
        setTaskContent(data);
        setTaskVisible(true);
        console.log('Success:', JSON.stringify(data));
      })
      .catch(error => console.error('Error:', error))
  },[])


  return (
    <React.Fragment>
      <div className="row justify-content-center">
        <>
          <Button variant="outline-info mt-4" className="button-search" onClick={handleShow}>
            <i className="fa fa-plus-circle fa-1x" aria-hidden="true"> new task </i>
          </Button>

          <Modal show={show} aria-labelledby="contained-modal-title-vcenter"
            centered onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title> Add your task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control style={{ border: "none", outline: "none !important" }} onChange={(e) => handleTaskContent(e)} placeholder="enter your task content here." as="textarea" rows="3" />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Add Task
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
      <div className="row justify-content-center mt-2">
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Active Tasks</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Completed Tasks</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Deleted Tasks</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div>
        {taskVisible ?
          <div>
            {taskContent.map((data, index) => (
              <Card className="task-card mt-2" key={index}>
                <Card.Header>{data.title}</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    {data.content}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">{data.date}</Card.Footer>
              </Card>
            ))}
          </div>
          : ""}
      </div>
    </React.Fragment>
  );
}