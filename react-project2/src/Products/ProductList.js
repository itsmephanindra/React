import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import { useEffect, useState } from 'react';
import axios from 'axios';


function ProductList(){

let [products,setProducts]=useState([]);

useEffect(  ()=>{
  async function getProducts(){
    let apiResponse=await axios.get('https://dummyjson.com/products');
    
    let data=apiResponse.data.products.map(product => {
              product.is_fav=false;
              return product;


   } )

    setProducts(data);
    
  }
  
getProducts();
},[])


function handleFav(data){

   let temp_product=products.map(product => {
          if (data === product.id){
            if(product.is_fav===false){  
            product.is_fav=true; 
          }
          else{
            product.is_fav=false;
          }
        }

            return product;
   })
     setProducts(temp_product);
 


}

    return (

<div>
        <div className="container">

        <div className="row"><div className="col-12"><Header/></div></div>

        <div className='row mt-5 mb-5'>
            {
                products.map(product =>(
                    <div className='col-3 mt-2 mb-2'>
                        <div className='card shadow'>  
                          <img src={product.thumbnail}/>
                          <div className="card-body">
                          <h5 className="card-title">{product.title}</h5>
                          <p className="card-text">{product.description}</p>
                          <button className="btn btn-primary" onClick={e=>handleFav(product.id)}> <i className="bi bi-heart"></i>
                          { product.is_fav === false && <span>Add</span>}
                          { product.is_fav === true && <span>Remove</span>}
                          
                          </button>
                          </div>                   
                        </div>

                    </div>
                )
                ) 
            }


        </div>

        <div className="row"><div className="col-12"><Footer/></div></div>


        </div>





</div>

)

}
export default ProductList;