import React, { useState, useEffect, useContext } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { CartContext } from '../context/CartContext'; 

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext); 
  const navigate = useNavigate(); 

  useEffect(() => {
    axios.get('http://localhost:5000/api/products').then(response => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Container>
      <Row className="mt-4">
        {products.map(product => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="text-primary">{product.price} VND</Card.Text>
                <Button 
                  variant="primary" 
                  onClick={() => addToCart(product)}
                  className="mr-2"
                >
                  Thêm vào Giỏ Hàng
                </Button>
                <Button 
                  variant="outline-secondary" 
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  Xem Chi Tiết
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Footer />
    </Container>
  );
};

const Footer = () => (
  <footer className="mt-5 py-3 bg-dark text-white text-center">
    <Container>
      <p className="mb-0">© 2024 MyShop. All rights reserved.</p>
      <p className="mb-0">123 Main Street, Anytown, USA</p>
    </Container>
  </footer>
);

export default HomePage;
