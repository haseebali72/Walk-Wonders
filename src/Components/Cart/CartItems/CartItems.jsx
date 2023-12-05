import CartList from '../CArtlist/CartList';

const CartItems = () => {
    return (
        <>
            <div className='bg-white inline-flex m-10 w-2/3 rounded-md'>
                <div className='heading px-4 pt-2 inline-block justify-between'>
                    <h1>Shopping Cart</h1>
                    <p> Price</p>
                </div>
                <CartList/>
            </div>

        </>
    )   
}

export default CartItems    