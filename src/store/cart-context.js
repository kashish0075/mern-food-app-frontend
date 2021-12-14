import React,{createContext,useState,useEffect} from 'react';
import axios from 'axios';

const CartContext = createContext({
   cart: [],
   cartLength: 0,
   addItemHandler:(item)=>{},
   incrementItem: (itemId) => { },
   decrementItem: (itemId) => { },
   placeOrder: () => { },
});

 export const CartContextProvider = (props) => {

     const initialItem = JSON.parse(window.localStorage.getItem('cart') || '[]');
   
    const [cart,setCart] = useState(initialItem);
    
    useEffect(() => {
       window.localStorage.setItem('cart', JSON.stringify(cart));
    },[cart]);

     console.log(cart);
     
     const addItemHandler = (item) => {
        setCart((prevState) => {

            const isItemAvailable = prevState.some((cartItem) => cartItem.id === item.id);

            if (isItemAvailable) {
                return prevState.map((cartItem) => cartItem.id === item.id ? { ...cartItem, qty: parseInt(cartItem.qty) + parseInt(item.qty)  } : cartItem);
            }

            return [...prevState, item];
        })
    }

    const placeOrderHandler = async() => {
        await axios.post('https://react-food-app-server.herokuapp.com/placeorder', { cart });
        setCart(() => {
            return [];
        });
    }
    

    const incrementQtyHandler = (itemId) => {
        setCart((prevState) => {
            return prevState.map((cartItem) => cartItem.id === itemId ? { ...cartItem, qty: parseInt(cartItem.qty) + 1 } : cartItem);
        })
    }

    const decrementQtyHandler = (itemId) => {
        setCart((prevState)=>{
            return prevState.map((cartItem) => cartItem.id === itemId ? { ...cartItem, qty: parseInt(cartItem.qty) - 1 } : cartItem);
        })
    }
    
    const context = {
        cart: cart,
        cartLength: cart.length,
        addItemHandler: addItemHandler,
        incrementItem: incrementQtyHandler,
        decrementItem: decrementQtyHandler,
        placeOrder:placeOrderHandler
    }
 
    return (
        <CartContext.Provider value={context}>
           {props.children}
        </CartContext.Provider>
    );
};

export default CartContext;