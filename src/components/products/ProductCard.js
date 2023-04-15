import React,{useEffect,useState} from 'react'
import { FaStar ,FaStarHalfAlt,FaRegStar} from 'react-icons/fa';
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai';
import {IoMdAdd} from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../actions/cart';
import { useLocation } from 'react-router-dom';
const ProductCard = ({product}) => {
    //   const navigate = useNavigate()
      const user = useSelector(state=>state.user.user)
      const [currenItemClicked,setCurrenItem]=useState()
    //   console.log(cart)
      const dispatch =useDispatch()
    const cartHandler =(item)=>{
         dispatch(addToCart(item))
    }
 
    const getStarts=(rating)=>{
        if(rating>4){
            return (<><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></>);
        }
        if(rating===4 ){
            return (<><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></>);
        }
        if(rating>3){
            return (<><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/></>);
        }
        if(rating===3){
            return (<><FaStar/><FaStar/><FaStar/><FaRegStar/> <FaRegStar/></>);
        }
        
    }

    return (
        <>
            {
                product?.map((item,i)=>(
                  <div key={i} className='product-card'>
                      <div className="img">
                          <img src={item?.img_url} alt="" />
                      </div>
                      <div className="des">
                        <h3>{item?.name}</h3>
                        <div className='starts'>{getStarts(item?.rating)}</div>
                        <b><p className='description'>{item?.description}</p></b>
                        <p className='price'> <span>Rs.</span>{item?.price}</p>
                      </div>
                      <div className="add-button" onClick={()=>cartHandler(item)}>
                          <IoMdAdd/>
                      </div>
                  </div>
                ))
            }
        </>
    )
}

export default ProductCard
