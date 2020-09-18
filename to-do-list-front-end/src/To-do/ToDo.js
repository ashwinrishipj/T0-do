import React, { useState, useEffect } from "react";
import { Nav, Form, Card, Button, Modal } from "react-bootstrap"


export default function Todo() {

  const [show, setShow] = useState(false);
  const [taskContent, setTaskContent] = useState("");
  const [newTask, setnewTask] = useState("")
  const [taskVisible, setTaskVisible] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleSubmit = () => {
    setShow(false)
    if (newTask !== "") {

    }
  };

  const handleTaskContent = (e) => {
    setnewTask(e.target.value);
  }

  const completeTask = (taskData) => {
    alert(JSON.stringify(taskData));
    fetch(`http://localhost:3004/completed/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    }).then(
      response =>
        console.log(response)
    ).catch(err => console.log(err))
  }

  const displayTask = ({ data, index }) => {
    return (
      <Card className="task-card mt-2" key={index}>
        <Card.Header>{data.title}</Card.Header>
        <Card.Body>
          <Card.Title>{data.content}</Card.Title>
          <Button variant="primary" onClick={() => completeTask(data)}>Complete Tasks</Button>
        </Card.Body>
        <Card.Footer className="text-muted">{data.date}</Card.Footer>
      </Card>
    )
  }

  const insertTask = () => {
    return (
      <React.Fragment>
        <Modal.Header closeButton>
          <Modal.Title> Add your task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control style={{ border: "none", outline: "none !important" }}
              onChange={(e) => handleTaskContent(e)}
              placeholder="enter your task content here." as="textarea" rows="3" />
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
      </React.Fragment>
    )
  }

  const validate = (apiResponse) => {
    if (apiResponse.length === 0) {
      console.log('failed:', JSON.stringify(apiResponse))
      setTaskVisible(false);
    }
    else {
      setTaskContent(apiResponse);
      setTaskVisible(true);
      console.log('Success:', JSON.stringify(apiResponse));
    }
  }

  useEffect(() => {
    fetch(`http://localhost:3004/tasks/`)
      .then(response => response.json())
      .then(data => {
        validate(data)
      })
      .catch(error => console.error('Error:', error))
  }, [])

  const fetchData = (taskType) => {
    fetch(`http://localhost:3004/${taskType}`).then(response => response.json()).then(data => {
      validate(data)
    }).catch(err => console.log("err", err));
  }

  return (
    <React.Fragment>
      <div className="row justify-content-center">
        <>
          <Button variant="outline-info mt-4" className="button-search" onClick={handleShow}>
            <i className="fa fa-plus-circle fa-1x" aria-hidden="true"> new task </i>
          </Button>

          <Modal show={show} aria-labelledby="contained-modal-title-vcenter"
            centered onHide={handleClose}>
            {insertTask()}
          </Modal>
        </>
      </div>
      <div className="row justify-content-center mt-2">
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link onClick = {()=>fetchData('tasks')} id="tasks" >Active Tasks</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick = { ()=> fetchData('completed')}>Completed Tasks</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick = { ()=> fetchData('deleted')} >Deleted Tasks</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div>
        {taskVisible ?
          taskContent.map((data, index) => (
            displayTask({ data, index })
          ))
          : "no Task for the selected date"}
      </div>
    </React.Fragment>
  );
}