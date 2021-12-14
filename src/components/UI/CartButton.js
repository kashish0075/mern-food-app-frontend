import React,{useContext} from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './CartButton.module.css';
import CartContext from '../../store/cart-context';

const CartButton = () => {

    const cartCxt = useContext(CartContext);

    return (
        <div>
            <button className={styles['cart-btn']}>
            <span className={styles.text}><FaShoppingCart className={styles['cart-icon']} /> Your Cart</span>
            <span className={styles.badge}>{cartCxt.cartLength}</span>
            </button>
        </div>
    );
};

export default CartButton;