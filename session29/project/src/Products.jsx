import { useEffect, useState } from "react"
import axios from "axios"
import Card from "./Card"
export default  function Products(){
    let [product,setProduct] = useState([])
    useEffect(()=>{

        getproduct() 
    },[])
    return (<>
        {/* <button onClick={getproduct}>get data</button> */}
        <div className="conatiner">
            <div className="row">
                {product.map((pro)=><Card id={pro.id} title={pro.title} price={pro.price} description={pro.description} image={pro.image} />)} 
            </div>
        </div>

    </>)

    function getproduct(){
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            console.log(res.data)
            setProduct(res.data)
        })
    }
}