import React from 'react'
import './Paginations.scss'
export const Paginations = ({productPage,perPage,setcurrentPage,currentPage}) => {
    const pages = []

    for (let i = 1; i<=Math.ceil(productPage/perPage); i++){
        pages.push(i)
    } 

  return (
    <div className='flex'>
        {
            pages.map((page,i)=>(
                <button key={i} onClick={()=>setcurrentPage(page)} className={page === currentPage ? 'pag active':'pag'}> {page} </button>
            ))
        }
    </div>
  )
}
