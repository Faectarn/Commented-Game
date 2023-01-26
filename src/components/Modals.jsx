import React, { useState } from 'react'
import Modal from "react-modal"
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

}

function ButtonModal() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setModalOpen(!modalOpen)} className="modal-button">{list}</button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        ariaHideApp={false}
        style={customStyles}
      >
        <button onClick={() => setModalOpen(false)} className="close">{close}</button>
        <h2>Välj en fråga</h2>
        <QuestionSelection />
      </Modal>
    </div>
  )
}
const close = <img src="https://cdn-icons-png.flaticon.com/512/458/458595.png" width="15"></img>


function InfoModal() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setModalOpen(!modalOpen)} className="modal-button">{info}</button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        ariaHideApp={false}
        style={customStyles}
      >
        <button onClick={() => setModalOpen(false)} className="close">{close}</button>
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