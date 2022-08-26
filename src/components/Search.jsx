import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../store/slices/filterSlice";
import { Link, useLocation } from "react-router-dom";

export const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filter);
  const location = useLocation();
  return (
    <div className="container">
      <div className="main-search mt-[100px] flex justify-between">
        <Link to="/">
          <div>
            <img src="images/Logo.png" alt="" />
          </div>
        </Link>
        {location.pathname != "/cart" && (
          <div className="search flex items-center justify-between w-[49%] ">
            <input
              value={search}
              onChange={(e) => dispatch(getSearch(e.target.value))}
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent border-none outline-none w-[70%] pl-5 text-black"
            />
            <div className="flex items-center cursor-pointer w-[30%] button ">
              <span className="text-white">
                {" "}
                <AiOutlineSearch size={20} />{" "}
              </span>
              <span className="ml-[5px] text-[14px] text-white">
                SEARCH OUR STORE
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
