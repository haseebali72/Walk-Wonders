import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {incrementItem, decrementItem} from "../../redux/slices/itemCountSlice";

const Counter = ({ itemId }) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.itemCount[itemId] || 1);
  console.log({itemId})
  return (
      <div className="flex">
        <button onClick={() => dispatch(incrementItem({ itemId }))}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrementItem({ itemId }))}>-</button>
      </div>
  );
};

export default Counter;
