import { useState } from "react"
import { motion } from 'framer-motion'

const Modal = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }
    return (
        <>
            <div className="btn-modal-container">
                {/* <button
                onClick={toggleModal}
                className="btn-modal"
                >
                New Workout
                </button> */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    className="menu-btn"
                    >
                    <button onClick={toggleModal} className="req-btn log-in-btn">
                        New Workout
                    </button>
                </motion.button>
            </div>
            
            {modal && (
                <div className="modal">
                    <div className="overlay" onClick={toggleModal}>
                        <div className="modal-content">
                            <br/>
                            <h2>
                                New Workout
                            </h2>
                            <p>
                                New workout
                            </p>
                            {/* <button
                            className="close-modal"
                            onClick={toggleModal}
                            >
                                Close
                            </button> */}
                                <button onClick={toggleModal} className="req-btn close-modal">
                                    <img className="x" src="/assets/images/icons/cross.png" alt="x" />
                                </button>
                        </div>
                    </div>
                </div>
            )}
            
        </>
    )
}

export default Modal
