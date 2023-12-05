import { useSelector } from "react-redux";
import { selectTotalPrice } from "../../../redux/slices/cartSlice";

const Total = () => {
  const items = useSelector(state => state.cart)
  const totalPrice = useSelector(selectTotalPrice)

  return (
    <>
      <div className='bg-white p-4 flex flex-col items-center'>
        <h1 className='mb-2'>Subtotal({items.length} Items): <b>${totalPrice}</b></h1>
        <button className='bg-yellow-400 px-4 py-2 rounded-md hover:bg-yellow-500'><b>Proceed to checkout</b></button>
      </div>
    </>
  );
};

export default Total;