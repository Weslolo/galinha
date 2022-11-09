
import React from "react";
import "../../styles/modalContato.css";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalContato = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose} className="modalContato">
        <Modal.Header closeButton>
            <Modal.Title>CONTATO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="contatoTexto">
            <i className="ri-mail-fill"></i> Email: <a href="mailto:odete.barros@sysagrosistemas.com.br">odete.barros@sysagrosistemas.com.br</a>
          </div>
          <div className="contatoTexto">
            <i className="ri-whatsapp-fill"></i> Whatsapp: <a href="https://wa.me/5545999296374">+55 45 99929-6374</a>
          </div>
          <div className="contatoTexto">
          <i className="ri-instagram-fill"></i> Instagram: <a href="https://www.instagram.com/sys.agro/">@sys.agro</a>
          </div>
        </Modal.Body>
        <Modal.Footer>
            <Button className="primary__btn" onClick={props.handleClose}>
            Fechar
            </Button>
        </Modal.Footer>
    </Modal>


  );
};

export default ModalContato;
