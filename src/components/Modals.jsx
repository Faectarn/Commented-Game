import React, { useState } from 'react'
import Modal from "react-modal";
import QuestionSelection from "./QuestionSelection"

const info = <img src="https://cdn-icons-png.flaticon.com/512/84/84264.png" width="25"></img>
const list = <img src='https://cdn-icons-png.flaticon.com/512/55/55281.png' width="25"></img>

const customStyles = {
  content: {
    top: "37%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 300,
  },

};

function ButtonModal() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <button onClick={setModalOpen} className="modal-button">{list}</button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
      >
        <h2>Välj en fråga</h2>
        <QuestionSelection />
      </Modal>
    </div>
  )
}

function InfoModal() {

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <button onClick={setModalOpen} className="modal-button">{info}</button>
      <Modal className=""
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
      >
        {/* <button onClick={() => setModalOpen(false)}>X</button> */}

        {/* <div>
          <h2>Instructions</h2>
          <h3>Use the image provided to guess what is being commented/reviewed.</h3>
          <h3>If you get a guess wrong a new image from the comments is revealed.</h3>
          <h3>Leave the input blank and press Submit to skip to the next image</h3>
        </div> */}
        <div>
          <h2>Instruktioner</h2>
          <h4>Använd bilden som visas för att gissa vad som kommenteras/recenseras</h4>
          <h4>Om du gissar fel eller lämnar inmatningen tom visas nästa bild</h4>
        </div>
      </Modal>
    </div>
  )
}

function Modals() {
  return (
    <>
      <ButtonModal />
      <InfoModal />
    </>
  )
}

export default Modals