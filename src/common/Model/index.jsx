import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './model.scss';
import RatingStars from '../star';
import CommonButton from '../button';
import cartContext from '../../configurations/cartContext';

export default function PopUpModel({ show, handleClose, product }) {
    const { addToCart } = useContext(cartContext);
    if (!product) return null;
    const addtocart = () => {
        addToCart(product); // this will handle everything

    }
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                size="lg"
                keyboard={false}
                className="quick-view-modal"
            >
                <Modal.Body>
                    <div className="product-content">
                        <div className="product-image">
                            <img src={product.thumbnail} alt={product.title} />
                        </div>

                        <div className="product-info">
                            <div className="productName">
                                <Modal.Title>{product.title}</Modal.Title>
                            </div>
                            <div className='ModelRating'>
                                <RatingStars rating={product.rating} />
                                <span className="review-count">( {product.reviews ? product.reviews.length : 0} Customer Reviews )</span>
                            </div>
                            <div className="price">
                                ${product.price}
                            </div>
                            <div className="brand">
                                <strong>Brand:</strong> {product.brand}
                            </div>
                            <div className="category">
                                <strong>Category:</strong> {product.category}
                            </div>
                            <div className="stock">
                                <strong>Stock:</strong> {product.stock}
                            </div>
                            <div className="squId">
                                <strong>SKU:</strong> {product.sku}
                            </div>
                            <div className="discription">
                                <strong>Discription:</strong>{product.description}
                            </div>
                            <div className='addToCart' onClick={addtocart}>
                                <CommonButton buttonText={'Add To Cart'} padding={'8px 20px'} />
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
        </>
    );
}