import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const response = await axios.get(`http://localhost:3000/products/${id}`);
    setTitle(response.data.title);
    setDescription(response.data.description);
    setPrice(response.data.price);
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/products/${id}`, {
      title,
      description,
      price,
    });
    navigate('/');
  };

  return (
    <div>
      <h2>Cập nhật sản phẩm</h2>
      <form onSubmit={updateProduct}>
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Giá</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mô tả</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Sửa</button>
        <button onClick={() => navigate('/')} className="btn btn-secondary ms-2">Trở lại</button>
      </form>
    </div>
  );
}

export default EditProduct;
