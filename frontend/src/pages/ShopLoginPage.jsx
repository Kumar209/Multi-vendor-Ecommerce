import React, { useEffect } from 'react';
import ShopLogin from "../components/shop/ShopLogin.jsx";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ShopLoginPage = () => {
  const navigate = useNavigate();

  const { isSeller, seller } = useSelector((state) => state.seller);

  // const isSeller = true;
  console.log(seller);

  useEffect(() => {
    if(isSeller === true){
      navigate(`/shop/${seller._id}`);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
        <ShopLogin />
    </div>
  )
}

export default ShopLoginPage