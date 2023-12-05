import React from 'react';
import CartItems from './CartItems/CartItems';
import { useSelector } from 'react-redux';
import EmptyCart from './Empty Cart/EmptyCart';
import Total from './Total and Checkout/Total';


const Cart = () => {
    const cartItemsArray = useSelector(state => state.cart)

    return (
        <>
      <div className='bg-slate-100 p-4 flex flex-col justify-between min-h-screen'>
                {cartItemsArray.length === 0 ? <EmptyCart /> : <CartItems />}
                <Total/>
            </div>

        </>
    );
}

export default Cart


