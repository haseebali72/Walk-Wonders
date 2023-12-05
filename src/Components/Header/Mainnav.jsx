import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Mainnav = () => {
  const countfromaddItem = useSelector(state => Object.values(state.addItemCount).reduce((acc, curr) => acc + curr, 0));
  const countfromCounter = useSelector(state => Object.values(state.itemCount).reduce((acc, curr) => acc + curr, 0));

  return (
    <div className='flex justify-center items-center'>
      <div className='inline-block mt-4 font-gibson-girl text-5xl text-red-500'>
        <NavLink to='/'>Walk Wonders</NavLink>
      </div>
      <div className='inline ml-36 text-xl'>
        <NavLink to='/log-In' className='m-3'><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></NavLink>
        <NavLink to='/your-cart' className='m-3 hover:bg-red-500'>
          <span className='bg-orange-400 rounded-xl font-thin text-sm'>{countfromCounter + countfromaddItem}</span>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </NavLink>  
      </div>
    </div>
  );
}

export default Mainnav;
