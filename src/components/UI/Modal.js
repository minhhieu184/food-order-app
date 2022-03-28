import React from 'react'
import ReactDOM from 'react-dom'

import styles from './Modal.module.css'
import Card from './Card'

const Modal = ({ children, onClose }) => {
  
    return (
        <>
            {ReactDOM.createPortal(
                (<div className={`${styles.modal} `}>
                    <div 
                        className={styles['modal-overlay']}
                        onClick={onClose}
                    >
                        <Card 
                            className={`${styles['modal-content']}`}
                            onClick={e => e.stopPropagation()}
                        >
                            {children}
                        </Card>
                    </div>
                </div>), 
                document.getElementById('root')
            )}
        </>
    );
}

export default Modal;
