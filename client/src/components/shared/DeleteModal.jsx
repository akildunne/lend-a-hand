import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { destroyEvent } from "../../services/events";


const DeleteModal = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isDeleted, setIsDeleted] = useState(false);
  const { id } = useParams();
  const history = useHistory();
 
  

  const eventDeleted = async () => {
    const deleted = await destroyEvent(id);
    setIsDeleted(deleted);
    history.push('/')
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Delete
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this event?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={eventDeleted}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;