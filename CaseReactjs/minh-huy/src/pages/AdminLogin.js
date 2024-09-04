import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/admin/login', { username, password })
      .then((response) => {
        navigate('/admin'); // Chuyển hướng đến trang admin sau khi đăng nhập thành công
      })
      .catch((error) => {
        setError('Tài khoản hoặc mật khẩu không đúng.');
      });
  };

  return (
    <Container className="login-container mt-5">
      <h2 className="text-center mb-4">Đăng Nhập Admin</h2>
      {error && <Alert variant="danger" className="text-center">{error}</Alert>}
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Group controlId="username" className="mb-3">
          <Form.Label>Tài khoản</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập tài khoản"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control-custom"
          />
        </Form.Group>
        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control-custom"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="btn-submit">
          Đăng Nhập
        </Button>
      </Form>
    </Container>
  );
};

export default AdminLogin;
