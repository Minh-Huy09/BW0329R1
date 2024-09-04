import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';

const RegisterPage = () => {
  const navigate = useNavigate();

  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, 'Tên tài khoản phải ít nhất 3 ký tự')
      .required('Tên tài khoản không được bỏ trống'),
    password: Yup.string()
      .min(6, 'Mật khẩu phải ít nhất 6 ký tự')
      .required('Mật khẩu không được bỏ trống'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Mật khẩu xác nhận không khớp')
      .required('Bạn cần xác nhận mật khẩu')
  });

  // Handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    // Chỉ gửi username và password (bỏ confirmPassword)
    const { username, password } = values;

    axios.post('http://localhost:5000/api/register', { username, password })
      .then(response => {
        alert('Đăng ký thành công!');
        navigate('/login'); // Chuyển hướng về trang đăng nhập sau khi đăng ký thành công
      })
      .catch(error => {
        alert('Đăng ký thất bại!');
        console.error('Error during registration:', error);
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <h2 className="text-center mb-4">Đăng Ký Tài Khoản</h2>
              <Formik
                initialValues={{ username: '', password: '', confirmPassword: '' }}
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
                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label">Xác nhận mật khẩu</label>
                      <Field
                        type="password"
                        name="confirmPassword"
                        className="form-control"
                        placeholder="Nhập lại mật khẩu"
                      />
                      <ErrorMessage name="confirmPassword" component="div" className="text-danger mt-1" />
                    </div>
                    <Button variant="primary" type="submit" disabled={isSubmitting} className="w-100">
                      Đăng Ký
                    </Button>
                  </Form>
                )}
              </Formik>
            </Card.Body>
            <Card.Footer className="text-center">
              <Row className="justify-content-center">
                <Col>
                  <p className="mb-0">Đã có tài khoản? <Button variant="link" onClick={() => navigate('/login')}>Đăng nhập ngay</Button></p>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
