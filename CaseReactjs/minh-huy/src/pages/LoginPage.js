import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';

const LoginPage = () => {
  const navigate = useNavigate();

  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Tên tài khoản không được bỏ trống'),
    password: Yup.string()
      .min(6, 'Mật khẩu phải ít nhất 6 ký tự')
      .required('Mật khẩu không được bỏ trống'),
  });

  // Handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    axios.post('http://localhost:5000/api/login', values)
      .then(response => {
        alert('Đăng nhập thành công!');
        navigate('/'); // Chuyển hướng về trang chủ sau khi đăng nhập thành công
      })
      .catch(error => {
        alert('Đăng nhập thất bại!');
        console.error('Error during login:', error);
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <h2 className="text-center mb-4">Đăng Nhập</h2>
              <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">Tên tài khoản</label>
                      <Field
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Nhập tên tài khoản"
                      />
                      <ErrorMessage name="username" component="div" className="text-danger mt-1" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Mật khẩu</label>
                      <Field
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Nhập mật khẩu"
                      />
                      <ErrorMessage name="password" component="div" className="text-danger mt-1" />
                    </div>
                    <Button variant="primary" type="submit" disabled={isSubmitting} className="w-100">
                      Đăng Nhập
                    </Button>
                  </Form>
                )}
              </Formik>
            </Card.Body>
            <Card.Footer className="text-center">
              <Row className="justify-content-center">
                <Col>
                  <p className="mb-0">Chưa có tài khoản? <Button variant="link" onClick={() => navigate('/register')}>Đăng ký ngay</Button></p>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
