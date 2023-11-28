import React, { useState, useEffect } from 'react'
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
    inset: "20% auto auto 50%"
  },

}

function ButtonModal() {

  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
      // Function to calculate time until midnight
      const timeUntilMidnight = () => {
          const now = new Date();
          const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
          return midnight - now;
      };

      // Set initial countdown
      setCountdown(timeUntilMidnight());

      // Update the countdown every second
      const interval = setInterval(() => {
          setCountdown(timeUntilMidnight());
      }, 10000);

      // Clear the interval when the component is unmounted
      return () => clearInterval(interval);
  }, []);

  // Format the countdown to display it
  const formatCountdown = () => {
      if (countdown !== null) {
          const hours = Math.floor(countdown / 3600000);
          const minutes = Math.floor((countdown % 3600000) / 60000);
          // const seconds = Math.floor((countdown % 60000) / 1000);

          return `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}min`;
      } else {
          return '00:00:00';
      }
  };
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
        <h2>Archive</h2>
        <QuestionSelection closeModal={() => setModalOpen(false)} />
        <p>New question in: {formatCountdown()}</p>
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
          <h2>Instructions</h2>
          <h4>Use the image provided to guess the which movie is being commented</h4>
          <h4>Each incorrect guess unveils a new review of the movie.</h4>
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