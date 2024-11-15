import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity, getTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div>
        <h2>Your Cart is Empty</h2>
        <Link to="/">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} style={{ width: '100px' }} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Grand Total: ${getTotal().toFixed(2)}</h3>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
