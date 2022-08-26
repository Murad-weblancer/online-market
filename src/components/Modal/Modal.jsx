import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Modal.scss";
import { useSelector,useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../../store/slices/cartSlice";

export const Modal = ({ open, modal }) => {
  const { products } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const goHome = () => {
    navigate("/");
    modal()
    dispatch(clearCart())
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {products.length === 0 ? (
            <>
              <motion.div
                onClick={modal}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className="modal-main"
              />
              <motion.div
                initial={{
                  scale: 0,
                  y: -500,
                  // opacity: 0
                }}
                animate={{
                  scale: 1,
                  y: 0,
                  // opacity: 1,
                  transition: {
                    duration: 0.3,
                    // delay:0.3
                  },
                }}
                exit={{
                  scale: 0,
                  y: -500,
                  // x:-100
                }}
                className="modal-main-wrapper"
              >
                <motion.div
                  initial={{
                    x: 100,
                  }}
                  animate={{
                    x: 0,
                    transition: {
                      duration: 0.3,
                      delay: 0.1,
                    },
                  }}
                  exit={{
                    x: 100,
                  }}
                  className="modal-main-wrapper-con"
                >
                  <h1 className="text-4xl"> Your cart is Empty </h1>
                  <div onClick={modal}>
                    <button className="order">Go order</button>
                  </div>
                </motion.div>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                onClick={modal}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className="modal-main"
              />
              <motion.div
                initial={{
                  scale: 0,
                  y: -500,
                  // opacity: 0
                }}
                animate={{
                  scale: 1,
                  y: 0,
                  // opacity: 1,
                  transition: {
                    duration: 0.3,
                    // delay:0.3
                  },
                }}
                exit={{
                  scale: 0,
                  y: -500,
                  // x:-100
                }}
                className="modal-main-wrapper"
              >
                <motion.div
                  initial={{
                    x: 100,
                  }}
                  animate={{
                    x: 0,
                    transition: {
                      duration: 0.3,
                      delay: 0.1,
                    },
                  }}
                  exit={{
                    x: 100,
                  }}
                  className="modal-main-wrapper-con"
                >
                  <label>
                    Name
                    <input type="text" placeholder="write your name" />
                  </label>
                  <label>
                    Email
                    <input type="email" placeholder="write your email" />
                  </label>
                  <label>
                    Number
                    <input type="number" placeholder="write your number" />
                  </label>
                  <div onClick={goHome}>
                    <button className="order">Order</button>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </>
      )}
    </AnimatePresence>
  );
};
