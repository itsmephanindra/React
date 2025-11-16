import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Products from "./Products";

function ProductList() {
  let [products, setProducts] = useState([]);
  let [itemscount, setItemscount] = useState(0);

  function noOfItemsInCart() {

    setItemscount(itemscount+1);

  }

    function removeCart() {

    setItemscount(itemscount-1);

  }

  useEffect(() => {
    async function getProducts() {
      let apiResponse = await axios.get("https://dummyjson.com/products");

      let data = apiResponse.data.products.map((product) => {
        product.is_fav = false;
        return product;
      });

      setProducts(data);
    }

    getProducts();
  }, []);



  function handleFav(data) {
    let temp_product = products.map((product) => {
      if (data === product.id) {
        if (product.is_fav === false) {
          product.is_fav = true;
        } else {
          product.is_fav = false;
        }
      }

      return product;
    });
    setProducts(temp_product);
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-3 mt-2"> Cart Count {itemscount} </div>
        </div>

        <div className="row">
          {products.map((product) => (
            <Products product={product}  noOfItemsInCart={noOfItemsInCart} removeCart={removeCart}/>
          ))}
        </div>

        <div className="row">
          <div className="col-12">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductList;
