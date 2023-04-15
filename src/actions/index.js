import pizza from "../apis/pizza"
import { ERROR, FETCH_PIZZAS, FETCH_PIZZAS_SUCCESS, SHOW_SIDEBAR } from "./types"

export const fetchPizzas=(category)=>async dispatch=>{
  dispatch({type:FETCH_PIZZAS,payload:[]})
  try{
    if(category=='pizza'){
      let {data} = await pizza.get(`https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68`)
      dispatch({type:FETCH_PIZZAS_SUCCESS,payload:data})
    }
    else if(category=='veg'){
      let {data} = await pizza.get(`https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68`)
      let newData = data.filter(pizza => pizza.isVeg)
      dispatch({type:FETCH_PIZZAS_SUCCESS,payload:newData})
    }
    else{
      let {data} = await pizza.get(`https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68`)
      let newData = data.filter(pizza => !pizza.isVeg)
      dispatch({type:FETCH_PIZZAS_SUCCESS,payload:newData})
    }
  }
  catch(e){
    dispatch({type:ERROR,payload:'Opps!,something went wrong'}) 
  }
}

export const showSideBar=(boolean)=>{
  return {type:SHOW_SIDEBAR,payload:boolean}
}