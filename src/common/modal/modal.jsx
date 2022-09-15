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

        <div class="modal fade" id={stateid} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class={`modal-dialog ${sizeModal}` }>
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {children}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{btn_s}</button>
                    <button data-bs-dismiss="modal" aria-label="Close" onClick={success} type="button" class="btn btn-primary">{btn_p}</button>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Modal