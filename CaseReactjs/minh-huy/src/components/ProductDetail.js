import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error("Error fetching product:", error));
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  if (!product) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Carousel className="product-carousel">
            {product.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col md={6}>
          <div className="product-details">
            <h2 className="product-title">{product.name}</h2>
            <h4 className="product-price">{product.price} VND</h4>
            <Button variant="primary" className="btn-add-to-cart" onClick={handleAddToCart}>
              Thêm vào giỏ hàng
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
