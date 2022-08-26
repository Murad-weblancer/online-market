import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { ProductCart } from "../components/ProductCart/ProductCart";
import { BsCartDash } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { clearCart } from "../store/slices/cartSlice";
import { getOpen } from "../store/slices/filterSlice";

export const Cart = () => {
  const { products,totalCount } = useSelector((state) => state.cart);
  const totalProducts = products.reduce((sum,obj)=>sum+obj.count,0)
  const { open } = useSelector((state) => state.filter);
  const dispatch = useDispatch()

  const closeOpen = ()=>{
    dispatch(getOpen(!open))
  }
  if (products.length === 0) {
    return (
      <div className="container">
        <div className="empty">
          <img className="empty-img" src="images/empty.png" alt="" />
          <Link to="/">
            <button> Go Back </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="container ">
      <div className="top-cart mt-10">
        <div className="top-cart-left">
          <BsCartDash className="icon" />
          <h1>Cart</h1>
        </div>
        <div className="top-cart-right" onClick={()=>dispatch(clearCart())} >
          <RiDeleteBin6Fill className="icon" />
          <h3>Clear</h3>
        </div>
      </div>
      {products.map((obj, i) => (
        <ProductCart {...obj} key={i} />
      ))}
      <div className="bottom-cart mb-10">
        <div className="bottom-cart-top">
          <h3>
            Number of products: <span> {totalProducts}  pcs.</span>
          </h3>
          <div>
          <h3>
            Amount <span>  {totalCount} $.</span>
          </h3>
          <button className="order" 
          onClick={closeOpen}
          >Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};
