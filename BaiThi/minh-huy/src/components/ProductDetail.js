import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const response = await axios.get(`http://localhost:3000/products/${id}`);
    setProduct(response.data);
  };

  return (
    <div>
      <h2>Chi tiết sản phẩm</h2>
      <p><strong>Tên sản phẩm:</strong> {product.title}</p>
      <p><strong>Mô tả:</strong> {product.description}</p>
      <p><strong>Giá:</strong> {product.price} VND</p>
      <button onClick={() => navigate('/')} className="btn btn-secondary">Trở lại</button>
    </div>
  );
}

export default ProductDetail;
