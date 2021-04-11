import React from 'react';

const Modal = (props) => {
    
    const hide = () =>{
        props.setDisplay(false)
    }

    return (
        <div className={props.display? 'modal': 'modal__none'}>
            <div className="modal__box">
                <button className="modal__close" onClick={hide}>×</button>
                <h3 className="modal__head">{props.title}</h3>
                <p className="modal__text">{props.pg}</p>
            </div>
        </div>
    )
};

export default Modal;


/* import React from 'react';

const Modal = (props) => {

    return (
        <div className={props.display? 'modal': 'modal__none'}>
            <div className="modal__box">
                <button className="modal__close" onClick={()=>props.setDisplay(false)}>×</button>
                <h3 className="modal__head">{props.title}</h3>
                <p className="modal__text">{props.pg}</p>
            </div>
        </div>
    )
}; */

/* import React, { useState } from 'react';

const Modal = (props) => {
    const [display, setDisplay]= useState(true);

    return (
        <div className="modal" style={{display: !display? '': 'none'}}>
            <div className="modal__box">
                <button className="modal__close">×</button>
                <h3 className="modal__head">Modal 1</h3>
                <p className="modal__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, nam.</p>
            </div>
        </div>
    )
};

export default Modal; */