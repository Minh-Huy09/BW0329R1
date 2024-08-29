import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const deleteProduct = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xoá sản phẩm này?')) {
      try {
        await axios.delete(`http://localhost:3000/products/${id}`);
        fetchProducts();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  // Format price to include dots
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN').format(price);
  };

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <Link to="/add" className="btn btn-success mb-3">Thêm mới</Link>
      <table className="table table-bordered">
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>#</th>
            <th>Tên sản phẩm</th>
            <th>Mô tả</th>
            <th>Giá</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>
                <Link to={`/product/${product.id}`}>{product.title}</Link>
              </td>
              <td>{product.description}</td>
              <td>{formatPrice(product.price)} VND</td>
              <td>
                <Link to={`/edit/${product.id}`} className="btn btn-primary btn-sm me-2">Sửa</Link>
                <button onClick={() => deleteProduct(product.id)} className="btn btn-danger btn-sm">Xoá</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
