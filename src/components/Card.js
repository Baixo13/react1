import React, { useState } from 'react';
import Modal from './Modal';

const Card = (props) => {

    const [displayModal, setDisplayModal] = useState(false);

    const show = ()=>{
        setDisplayModal(true)
    }

    return (
        <>
            <div className='card'>
                <img className="card__img" src={props.urlImg} alt="" />
                <h4 className="card__head">{props.title}</h4>
                <p className="card__parrafo">{props.pg}</p>
                <button id="card2__btn" className="card__button" onClick={show}>{props.caption}</button>
            </div>
            <Modal
                display={displayModal}
                setDisplay={setDisplayModal}
                title={props.modalTitle}
                pg={props.modalPg}
            />
        </>
    )
};

export default Card;