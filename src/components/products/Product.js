import React,{useState,useEffect} from 'react'
import ProductCard from './ProductCard'
import {useDispatch, useSelector } from 'react-redux';
import SkeletonArticle from '../../skeleton/SkeletonArticle';
import { fetchPizzas } from '../../actions';
const Product = ({category}) => {
  const dispatch=useDispatch()
  const allPizzas= useSelector(state=>state.allPizza)
  const {loading,error,data}=allPizzas
// console.log(category)
  const [show,setShow]=useState(error)
    useEffect(()=>{
      if(category){
        dispatch(fetchPizzas(category))
      }
    },[category])
    
    return (
        <div className='all-products'>
          {data.length===0||loading?(
          <>
            {[1,2,3].map(n=><div className='product-card' key={n}><SkeletonArticle key={n}/></div>)}
          </>
          ):<ProductCard product={data}/>}
        </div>
    )
}

export default Product
