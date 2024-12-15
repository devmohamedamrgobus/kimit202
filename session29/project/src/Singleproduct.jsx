import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
export default function Singleproduct() {
    let [product,setProduct] =useState({})
    let {id} = useParams()

    useEffect(()=>{
        getproduct(id)
    },[])
    
  return (
    <>
        <h1>{product.title}</h1>
        <img src={product.image} />

        
    </>
  )

  function getproduct(id){
    axios.get("https://fakestoreapi.com/products/"+id).then((res)=>{
        setProduct(res.data)
    })
}
}
