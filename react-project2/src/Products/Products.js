function Products({ product,noOfItemsInCart,removeCart}) {
  

  
    return (
    <>
      <div className="col-3 mt-2 mb-2">
        <div className="card shadow">
          <img src={product.thumbnail} />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p>
              <i class="bi bi-currency-rupee">{product.price}</i>
            </p>
            <button
              className="btn btn-primary me-2"
              onClick={(e) => noOfItemsInCart(product.id)}
            > Add              
            </button>
              <button
              className="btn btn-danger ms-2"
              onClick={(e) => removeCart(product.id)}
            > Remove              
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
