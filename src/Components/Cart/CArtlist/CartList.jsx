import Counter from '../../Counter/Counter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../../redux/slices/cartSlice';
import { subtractCount } from '../../../redux/slices/addItemCounterSlice';

const CartList = () => {
    const dispatch = useDispatch()
    const deleteHandlerFunction = (p) => {
        dispatch(removeItem(p.id));
        dispatch(subtractCount({ itemId: p.id, quantity: 0 })); // Pass the quantity
    };
    const cartItemsArray = useSelector(state => state.cart)

    return (
        <>    <ul className='block'>
            {cartItemsArray.map((p) => {
                return (
                    <li className='flex mt-2 mb-2 hover:bg-slate-200 rounded-md transition-all' key={p.id}>
                        <img src={p.imageURL} alt='shoes' className='w-40 h-40 inline-flex mx-5 my-2 rounded-sm' />
                        <div>
                            <h2>{p.name}</h2>
                            <h4 className='inline-flex float-right ml-96'>{p.price}</h4>
                            <p>{!p.is_in_inventory ? "Not Available" : 'Available'}</p>
                            <p>{p.gender}</p>
                            Quantity:<Counter itemId={p.id} />
                            |<button onClick={() => deleteHandlerFunction(p)}><FontAwesomeIcon icon={faTrash} /></button>|
                            <hr className="border-t border-white my-4" />
                        </div>
                    </li>
                )
            })}

        </ul>
        </>
    )
}

export default CartList