import React, { useState } from "react";
import { FiUser, FiPhone, FiShoppingBag } from "react-icons/fi";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getOpen } from "../store/slices/filterSlice";
import { Modal } from "./Modal/Modal";
export const Navbar = () => {
  const { products } = useSelector((state) => state.cart);
  const { open } = useSelector((state) => state.filter);
  const dispatch = useDispatch()
  const totalProducts = products.reduce((sum, obj) => sum + obj.count, 0);
  // const [open,setOpen] = useState(false)
  open?document.body.style.overflow = 'hidden':document.body.style.overflow='auto'
  const closeOpen = ()=>{
    dispatch(getOpen(!open))
  }
  return (
    <>
      <nav className=" flex items-center bg-[#0C0C0C] min-h-[50px] fixed top-0 left-0 w-full z-50 ">
        <ul className="container flex justify-end items-center w-full h-full bor">
          <li className="text-[14px] font-[400px] text-white flex items-center cursor-pointer">
            <span className="mr-3">
              {" "}
              <FiPhone />
            </span>
            (907) 555-0101{" "}
          </li>
          <li
          onClick={()=> dispatch(getOpen(true))}
          className="text-[14px] font-[400px] text-white flex items-center ml-10 cursor-pointer">
            <span className="mr-3">
              {" "}
              <FiUser />{" "}
            </span>{" "}
            Order
          </li>
          <Link to="/cart">
            <li className="text-[14px] font-[400px] text-white flex items-center ml-10 cursor-pointer relative">
              {totalProducts ? (
                <span className="absolute top-[-50%] right-[60%]">
                  {totalProducts}
                </span>
              ) : null}
              <span className="mr-3">
                {" "}
                <FiShoppingBag />{" "}
              </span>{" "}
              Cart
            </li>
          </Link>
        </ul>
      </nav>
      <Modal open={open} modal={closeOpen} />
    </>
  );
};
