import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPalette } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faLinkedin, faSteamSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import './ContactModal.css';

const ContactModal = (props) => {
  const {
    buttonLabel
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  // Х
  // Ӽ
  // ✌
  // 🔥
  // 🎈
  // ⚔
  // 🚫
  // ✖
  // ❌

  return (
    <div>
      <Button color="link" onClick={toggle}>{buttonLabel}</Button>
      <Modal className="modal-border" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="modal-header" charCode="✌">Reach out</ModalHeader>
        <ModalBody className="modal-body">
          <span> <FontAwesomeIcon icon={faEnvelope} size="lg" /> anthonybenchyep@gmail.com </span> <br />
          <span>  <FontAwesomeIcon icon={faEnvelope} size="lg" /> yep@pdx.edu </span> <br />
          <span>  <FontAwesomeIcon icon={faLinkedin} size="lg" /> linkedin.com/in/anthonybench </span> <br />
          <span>  <FontAwesomeIcon icon={faDiscord} size="lg" /> Sleepy Boy #9699 </span> <br />
          <span>  <FontAwesomeIcon icon={faSteamSquare} size="lg" /> anthonybench </span> <br />
          <span>  <FontAwesomeIcon icon={faGithubSquare} size="lg" /> github.com/anthonybench </span> <br />
          <span>  <FontAwesomeIcon icon={faPalette} size="lg" /> pixilart.com/sleepyboy </span>
        </ModalBody>
        <ModalFooter className="modal-footer">
          Can't wait to hear from you!
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ContactModal;