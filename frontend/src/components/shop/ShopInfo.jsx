import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { backend_url, server } from "../../server";
import styles from "../../styles/style";
import Loader from "../Layout/Loader";
import { useDispatch, useSelector } from "react-redux";
// import { getAllProductsShop } from "../../redux/actions/product";

const ShopInfo = ({isOwner}) => {
  // const [data,setData] = useState({});
  // const {products} = useSelector((state) => state.products);
  // const [isLoading,setIsLoading] = useState(false);
  // const {id} = useParams();
  // const dispatch = useDispatch();

  const { seller } = useSelector((state)=> state.seller)

  return (
    <div className="w-full py-5">
      
    </div>
  )
}

export default ShopInfo