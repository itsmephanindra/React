import { useState } from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import axios from "axios";

function Product(){

    let [productData,setProductData]=useState({});
    let [usersData,setUsersData]=useState([]);

    async function getData(){
        let apiResponse=await axios.get("https://dummyjson.com/products/1")
        setProductData(apiResponse.data);

    }

    async function getUsersData(){
        let apiResponse=await axios.get("https://dummyjson.com/users")
        setUsersData(apiResponse.data.users);
    }

return (

    <div className="container">
        <div className="row mt-3"><div className="col-12"><Header/></div></div>

        <div className="row mt-3">
            <div className="col-12">
                <button className="btn btn-primary" onClick={e=>getData()}>Get SIngle Product data</button>
                </div>
                    </div>
        { 
        Object.keys(productData).length > 0 &&

        <div>
                  <div>Price {productData.price}</div>
                <div>Percentage {productData.discountPercentage}</div>
                <div>Rating {productData.rating} <i className="bi bi-star-half"></i> </div>
                    <div>{
                            productData.images.map( image =>
                                <img src={image}/>
                            )           
                        } </div>

        </div>
        }
  


        <div className="row"> 
            <div className="col-3">
                <button className="btn btn-primary mt-3" onClick={e=>getUsersData()}>Get user Data</button>
                </div>

                <div className="row">
                    <div className="col-12">
                        {
                                usersData.map(user =>(
                                    <div className="bg-light shadow">
                                    <h6>{user.id}, {user.firstName} , {user.lastName} <br/> 
                                    {user.hair.color} , <br/> 
                                    {user.company.name}, {user.company.address.city},{user.company.address.postalCode}</h6> 
                                    </div>                                   
                                ))
                        }
                    </div>
                </div>
        </div>
        <div className="row mt-3"><div className="col-12"><Footer/></div></div>
    </div>
)

}

export default Product;