import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './model.scss';

export default function PopUpModel({ show, handleClose, product }) {
    if (!product) return null;

    return (
        <Modal 
            show={show} 
            onHide={handleClose}
            centered
            size="lg"
            className="quick-view-modal"
        >
            <Modal.Header closeButton>
                <Modal.Title>{product.title}</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                <div className="product-content">
                    <div className="product-image">
                        <img src={product.thumbnail} alt={product.title} />
                    </div>
                    
                    <div className="product-info">
                        <div className="price">
                            <strong>Price:</strong> ${product.price}
                        </div>
                        <div className="rating">
                            <strong>Rating:</strong> {product.rating}
                        </div>
                        <div className="description">
                            <strong>Description:</strong>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}