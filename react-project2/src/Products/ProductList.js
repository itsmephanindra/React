import { use, useEffect, useState } from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import axios from "axios";

function ProductList() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProucts() {
      var apiResponse = await axios.get("https://dummyjson.com/products");
      setProducts(apiResponse.data.products);
    }

    getProucts();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <Header />
          </div>
        </div>
        <div className="row mt-5">
          {products.map((product) => (
            <div className="col-3">
              <div className="card shadow mt-2 mb-2">
                <img
                  src={product.thumbnail}
                  height="200"
                  className="card-img-top"
                  alt={product.title}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-12">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
