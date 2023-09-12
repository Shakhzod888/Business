import React from "react";
import "../products/products.scss";
import Product_1 from "../assets/product_1.png";
import Product_2 from "../assets/product_2.png";
import Product_3 from "../assets/product_3.png";
import Product_4 from "../assets/product_5.png";
import Product_5 from "../assets/product_6.png";
import Product_6 from "../assets/product_7.png";

function Products() {
  return (
    <div className="products_container">
      <div class="grid-container">
        <div class="grid-item">
          <img src={Product_1} alt="" />
        </div>
        <div class="grid-item">
          <img src={Product_2} alt="" />
        </div>
        <div class="grid-item">
          <img src={Product_3} alt="" />
        </div>
        <div class="grid-item">
          <img src={Product_4} alt="" />
        </div>
        <div class="grid-item">
          <img src={Product_5} alt="" />
        </div>
        <div class="grid-item">
          <img src={Product_6} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Products;
