import React, { useRef, useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export const modalRef = useRef(null);
export const FormModal = () => {

  const modalRe = useRef(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className='text-right d-none' useRef={modalRe} onClick={() => { handleShow, modalRef = modalRe }}>
        Create File
      </Button>
      <Modal className='modal-xl' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Form formObject={fileFormJSON} editData={docFile} url={url} requestType={requestType} /> */}
        </Modal.Body>
        {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Create File
                    </Button>
                </Modal.Footer> */}
      </Modal>
    </>
  )
}
