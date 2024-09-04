import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Form, Modal } from 'react-bootstrap';

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showProductModal, setShowProductModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [editCategory, setEditCategory] = useState(null);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '', image: '' });
  const [newCategory, setNewCategory] = useState({ name: '' });
  const [selectedUser, setSelectedUser] = useState('');
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products').then(response => setProducts(response.data));
    axios.get('http://localhost:5000/api/categories').then(response => setCategories(response.data));
    axios.get('http://localhost:5000/api/admin/carts').then(response => setCarts(response.data));
  }, []);

  const handleAddProduct = () => {
    if (editProduct) {
      axios.put(`http://localhost:5000/api/products/${editProduct.id}`, newProduct)
        .then(response => {
          setProducts(products.map(product => product.id === editProduct.id ? response.data : product));
          setShowProductModal(false);
          setNewProduct({ name: '', price: '', category: '', image: '' });
          setEditProduct(null);
        });
    } else {
      axios.post('http://localhost:5000/api/products', newProduct)
        .then(response => {
          setProducts([...products, response.data]);
          setShowProductModal(false);
          setNewProduct({ name: '', price: '', category: '', image: '' });
        });
    }
  };

  const handleAddCategory = () => {
    if (editCategory) {
      axios.put(`http://localhost:5000/api/categories/${editCategory.id}`, newCategory)
        .then(response => {
          setCategories(categories.map(category => category.id === editCategory.id ? response.data : category));
          setShowCategoryModal(false);
          setNewCategory({ name: '' });
          setEditCategory(null);
        });
    } else {
      axios.post('http://localhost:5000/api/categories', newCategory)
        .then(response => {
          setCategories([...categories, response.data]);
          setShowCategoryModal(false);
          setNewCategory({ name: '' });
        });
    }
  };

  const handleEditProduct = (product) => {
    setNewProduct(product);
    setEditProduct(product);
    setShowProductModal(true);
  };

  const handleEditCategory = (category) => {
    setNewCategory(category);
    setEditCategory(category);
    setShowCategoryModal(true);
  };

  const handleDeleteProduct = (id) => {
    axios.delete(`http://localhost:5000/api/products/${id}`)
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
      });
  };

  const handleDeleteCategory = (id) => {
    axios.delete(`http://localhost:5000/api/categories/${id}`)
      .then(() => {
        setCategories(categories.filter(category => category.id !== id));
      });
  };

  const handleViewCart = (username) => {
    setSelectedUser(username);
    setShowCartModal(true);
  };

  return (
    <div className="container mt-5">
      <h2>Quản Lý Sản Phẩm</h2>
      <Button variant="primary" onClick={() => setShowProductModal(true)}>Thêm Sản Phẩm</Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Thể Loại</th>
            <th>Hình Ảnh</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td><img src={product.image} alt={product.name} width="50" /></td>
              <td>
                <Button variant="warning" onClick={() => handleEditProduct(product)}>Sửa</Button>{' '}
                <Button variant="danger" onClick={() => handleDeleteProduct(product.id)}>Xóa</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h2>Quản Lý Thể Loại</h2>
      <Button variant="primary" onClick={() => setShowCategoryModal(true)}>Thêm Thể Loại</Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>
                <Button variant="warning" onClick={() => handleEditCategory(category)}>Sửa</Button>{' '}
                <Button variant="danger" onClick={() => handleDeleteCategory(category.id)}>Xóa</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h2>Quản Lý Giỏ Hàng Của Người Dùng</h2>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Người Dùng</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {carts.map(userCart => (
            <tr key={userCart.username}>
              <td>{userCart.username}</td>
              <td>
                <Button variant="info" onClick={() => handleViewCart(userCart.username)}>Xem Giỏ Hàng</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for adding/editing a product */}
      <Modal show={showProductModal} onHide={() => setShowProductModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editProduct ? 'Sửa Sản Phẩm' : 'Thêm Sản Phẩm Mới'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formProductName">
              <Form.Label>Tên Sản Phẩm</Form.Label>
              <Form.Control type="text" placeholder="Nhập tên sản phẩm" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formProductPrice">
              <Form.Label>Giá</Form.Label>
              <Form.Control type="text" placeholder="Nhập giá" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formProductCategory">
              <Form.Label>Thể Loại</Form.Label>
              <Form.Control as="select" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}>
                {categories.map(category => (
                  <option key={category.id} value={category.name}>{category.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formProductImage">
              <Form.Label>Hình Ảnh</Form.Label>
              <Form.Control type="text" placeholder="Nhập URL hình ảnh" value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowProductModal(false)}>Đóng</Button>
          <Button variant="primary" onClick={handleAddProduct}>{editProduct ? 'Lưu Thay Đổi' : 'Thêm Sản Phẩm'}</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for adding/editing a category */}
      <Modal show={showCategoryModal} onHide={() => setShowCategoryModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editCategory ? 'Sửa Thể Loại' : 'Thêm Thể Loại Mới'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCategoryName">
              <Form.Label>Tên Thể Loại</Form.Label>
              <Form.Control type="text" placeholder="Nhập tên thể loại" value={newCategory.name} onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCategoryModal(false)}>Đóng</Button>
          <Button variant="primary" onClick={handleAddCategory}>{editCategory ? 'Lưu Thay Đổi' : 'Thêm Thể Loại'}</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for viewing user's cart */}
      <Modal show={showCartModal} onHide={() => setShowCartModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Giỏ Hàng của {selectedUser}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add logic to display the user's cart details */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCartModal(false)}>Đóng</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminPage;
