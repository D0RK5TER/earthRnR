import React from 'react';
import { useModal } from '../../context/Modal'
// import './OpenModal.css'
function OpenModalButton({
  id,
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose // optional: callback function that will be called once the modal is closed
}) {
  //html, body {margin: 0; height: 100%; overflow: hidden}
  const { setModalContent, setOnModalClose } = useModal();

  const onClick = () => {
    // const body = document?.getElementById('outter')

    // const body = document?.getElementById('onespotcont')
    if (typeof onButtonClick === 'function') onButtonClick()
    if (typeof onModalClose === 'function') setOnModalClose(onModalClose);
    // console.log(body, '!!KSAJNDFAKSNDKSAND')
    // body.style.overflow = 'hidden'
    // body.style.height = '100vh'
    // body.style.margin = ''
    // body.position = 'absolute'
    setModalContent(modalComponent);
  };

  return (
    <button id={id} onClick={onClick}>{buttonText}</button>
  );
}

export default OpenModalButton;