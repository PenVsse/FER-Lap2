import { Container } from '@mui/system'
import React from 'react'
import './Modal.css'
export default function Modal({ setIsOpen, film }) {
    return (
        <div className='modal-show' onClick={() => setIsOpen(false)}>
            <div id='modal1' className='modal' style={{ display: 'block' }}>
                <div className='modal-content'>
                    <h4>Video for {film.name}</h4>
                    <p><iframe width="100%" height="400px" src={film.clip} title={film.name} frameborder="0"
                        allow="accelermoter; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe></p>


                    <div className='modal-footer'>
                        <a className='modal-close'>Close</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
