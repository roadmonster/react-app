import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    // check if the product in the cart yet, if yes, update the quantity, else add the product and quantity 1
    const addToCart = (product) => {
        
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item);
            }
            return [...prevCart, {...product, quantity: 1}];
        });
    }

    // simply remove the item 
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    }

    // update the amount of the item, min 1, user cannot decrease to 0, because we have a separte remove button
    const updateQuantity = (id, amount) => {
        setCart((prevCart) => prevCart.map((item) => 
            item.id === id ? {...item, quantity: Math.max(1, item.quantity + amount)} : item));
     };

    // empty the cart
    const clearCart = () => {setCart([])};

    // get the grand total of the cart
    const getTotal = () => cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, updateQuantity, getTotal}}>
            {children}
        </CartContext.Provider>
    
    );
};

export const useCart = () => useContext(CartContext);