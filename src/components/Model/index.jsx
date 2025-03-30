import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './model.scss';

export default function PopUpModel({ show, handleClose, product }) {
    return (
        <div className='quickviewModel'>
            <Modal show={show} onHide={handleClose} centered backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{product?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div className='productMain' style={{ display: 'flex' }}>
                        <div className='productImg'>
                            <img src={product?.thumbnail} alt={product?.title} style={{ width: '100%' }} />
                        </div>
                        <div className='productDetail'>
                            <p><strong>Price:</strong> ${product?.price}</p>
                            <p><strong>Rating:</strong> {product?.rating}</p>
                            <p>{product?.description}</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}