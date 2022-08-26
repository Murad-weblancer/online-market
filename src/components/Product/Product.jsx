import React from 'react'
import { useDispatch } from 'react-redux'
import { addProducts } from '../../store/slices/cartSlice'
import './Product.scss'
export const Product = ({title,price,imageUrl,id}) => {
  const dispatch = useDispatch()
  const addToCart = () =>{
    const items = {
      title,price,imageUrl,id
    }
    dispatch(addProducts(items))
  }
  return (
    <div className="goods__list--item goods-item">
    <div className="goods-item__img">
      <img src={imageUrl} alt="" />
    </div>
    <div className="goods-item__content">
      <h3>{title}</h3>
      <p>{price}$</p>
    </div>
    <span className="goods-item__btn"  onClick={addToCart} >
      buy
    </span>
  </div>
  )
}
