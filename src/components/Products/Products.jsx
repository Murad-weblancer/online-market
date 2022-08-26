import React, { useState } from 'react'
import { Product } from '../Product/Product'
import data from '../../data.json'
import { useDispatch,useSelector } from "react-redux";
import './Products.scss'
import { getId, getIdLapts, getIdPhones } from '../../store/slices/filterSlice';
import { Paginations } from '../Paginations/Paginations';
export const Products = () => {
    // list
    const list = ['All','Phones','Laptops','Teches','Tves']
    const listPhones = ['','Iphones','Samsung','Xiomi']
    const listLapts = ['','Lenovo','MacBook']
    // useState
    const [products, setProducts] = useState(data)
    const [activePhone, setActivePhone] = useState(false)
    // redux
    const dispatch = useDispatch()
    const {category,search,categoryPhones,categoryLapts} = useSelector( state=>state.filter)
    const filterCategory = technoId => {
        dispatch(getId(technoId))
        setProducts(
            data.filter(i=>{
                if(technoId){
                    return i.technoId === technoId
                }else{
                    return products
                }
            })
        )
    }
    const filterPhones = phones =>{
        dispatch(getIdPhones(phones))
        setProducts(
            data.filter(item=> item.phones === phones)
        )
    }
    const filterLapts = nout =>{
        dispatch(getIdLapts(nout))
        setProducts(
            data.filter(item=> item.nout === nout)
        )
    }

    // pagination
    const [currentPage, setcurrentPage] = useState(1)
    const [perPage, setperPage] = useState(8)
    const lastIndex = perPage * currentPage
    const firstIndex = lastIndex - perPage
    const totalPage = products.slice(firstIndex,lastIndex)
    
  return (
    <div className='products'>
        <ul className='products-list'>
            {
                list.map((obj,i)=>(
                    <li key={i} className={category === i ? 'active':''} onClick={()=>filterCategory(i)}> {obj} </li>
                ))
            }
        </ul>
        {
            category === 1 &&(
                <ul className='phones-list'>
                    {
                        listPhones.map((obj,i)=>(
                            <li  key={i} onClick={()=>filterPhones(i)} > {obj} </li>
                        ))
                    }
                </ul>
            )
        }
        {
            category === 2 &&(
                <ul className='phones-list'>
                    {
                        listLapts.map((obj,i)=>(
                            <li  key={i} onClick={()=>filterLapts(i)}  > {obj} </li>
                        ))
                    }
                </ul>
            )
        }

        <div className='mt-10 items'>
            {
                totalPage.filter(item=>{
                    return search.toLowerCase() === '' ? item: item.title.toLowerCase().includes(search)
                }).map((obj,i)=>(
                    <Product {...obj} key={i} />
                ))
            }
        </div>
        <Paginations  perPage={perPage} productPage={products.length} setcurrentPage={setcurrentPage} currentPage={currentPage} />
    </div>
  )
}
