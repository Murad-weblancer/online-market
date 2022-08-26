import React from "react";
import "./ProductCart.scss";
import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiFillCloseCircle,
} from "react-icons/ai";
import { useSelector,useDispatch } from "react-redux";
import { decriment, increment, removeProducts } from "../../store/slices/cartSlice";


export const ProductCart = ({ title, imageUrl, price, id, count }) => {
    const dispatch = useDispatch()
  return (
    <div>
      <div className="item-cart">
        <div className="item-cart-first">
          <img src={imageUrl} alt="" />
          <h4> {title} </h4>
        </div>
        <div className="item-cart-second">
          <span className="minus" onClick={()=>dispatch(decriment(id))} >
            {" "}
            <AiFillMinusCircle className="icon" />{" "}
          </span>
          <span className="count"> {count} </span>
          <span className="plus" onClick={()=>dispatch(increment(id))} >
            {" "}
            <AiFillPlusCircle className="icon" />{" "}
          </span>
        </div>
        <div className="item-cart-third">
          <span className="price"> {price * count} $ </span>
        </div>
        <div className="item-cart-forth"
        onClick={()=>dispatch(removeProducts(id))}
        >
          <span>
            <AiFillCloseCircle className="icon two" />
          </span>
        </div>
      </div>
    </div>
  );
};
