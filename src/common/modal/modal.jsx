import React from 'react'
import './Modal.css'

function Modal({icon,
                state,
                stateid,
                children,
                btn_p,
                btn_s,
                title,
                classbtn,
                success,
                starFunction,
                sizeModal
            }) {
  return (
    <>
        <span onClick={starFunction} className={`material-symbols-outlined btn ${classbtn}`} data-bs-toggle="modal" data-bs-target={state}>{icon}</span>

        <div className="modal fade" id={stateid} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className={`modal-dialog ${sizeModal}` }>
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{btn_s}</button>
                    <button data-bs-dismiss="modal" aria-label="Close" onClick={success} type="button" className="btn btn-primary">{btn_p}</button>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Modal