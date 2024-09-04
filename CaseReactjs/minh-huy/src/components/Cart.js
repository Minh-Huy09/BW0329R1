import React, { useContext } from 'react';
import { Container, Table, Button, Form } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, updateCartQuantity, removeFromCart, calculateTotal } = useContext(CartContext);

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Giỏ hàng của bạn</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Giỏ hàng trống.</p>
      ) : (
        <Table striped bordered hover className="custom-table">
          <thead>
            <tr>
              <th>Sản phẩm</th>
              <th>Số lượng</th>
              <th>Giá</th>
              <th>Tổng</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  <Form.Control
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateCartQuantity(item.id, parseInt(e.target.value))}
                    min="1"
                    className="quantity-input"
                  />
                </td>
                <td>{item.price} VND</td>
                <td>{item.price * item.quantity} VND</td>
                <td>
                  <Button variant="danger" className="btn-remove" onClick={() => removeFromCart(item.id)}>
                    Xóa
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <h4 className="mt-4">Tổng cộng: {calculateTotal()} VND</h4>
    </Container>
  );
};

export default Cart;
