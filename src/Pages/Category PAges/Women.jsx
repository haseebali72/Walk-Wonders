import { products } from '../../data/Products';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import { addCount } from '../../redux/slices/addItemCounterSlice';
import { NavLink } from 'react-router-dom';
import ProductPage from '../General Pages/ProductPage';

const Women = () => { 
  const dispatch = useDispatch();

  const addItemHandler = (p) => {
    dispatch(addItem(p));
    dispatch(addCount({itemId : p.id, quantity:0}))
  };

  const womenProduct = products.filter((p) => p.gender === 'WOMEN');

  return (
    <div className="flex flex-wrap">
      {womenProduct.map((p) => (
        <NavLink to='/product'>
        <div key={p.id} className='w-64 h-84 m-2  hover:shadow-lg transition-transform transform hover:translate-y-0.5'>
          <div className='w-auto h-auto flex'>
            <img className='' src={p.imageURL} alt={p.name} />
          </div>
          <div className='w-auto h-auto block '>
            <p>{p.name}-{p.gender}</p>
            <p>{p.price}</p>
            <button className='bg-red-700 border border-red-950 font text-white mb-3 ml-7 ' onClick={() => addItemHandler(p)}>Add to Cart
            </button>
          </div>
        </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Women;