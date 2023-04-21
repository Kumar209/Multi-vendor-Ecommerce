import React, { useState } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ProductDetails from "../components/Products/ProductDetails.jsx";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
    const {name} = useParams();
    const [data, setData] = useState(null);

  return (
    <div>
      <Header />
      <ProductDetails />
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
