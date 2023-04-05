import PropTypes from "prop-types";
import { ProductContext } from "../Contexts/ProductContext";
import { useContext } from "react";

const Product = ({ children, onDeleteProduct, id }) => {
  

  const { deleteProduct } = useContext(ProductContext)
  return (
      <>
        <div className="my-4">
      <div className="card text-white bg-primary mb-3">
      {children}
    
       </div>

              <button onClick={() => deleteProduct(id)} className="btn btn-light">Delete</button>        
       </div>
          

    </>
  );
};

Product.propTypes = {
  label: PropTypes.string,
  price: PropTypes.number.isRequired,
};

Product.defaultProps = {
  label: "my product",
  price: 0,
};

export default Product;
