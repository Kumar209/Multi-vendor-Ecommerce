import React, { useEffect } from 'react';
import ShopLogin from "../components/shop/ShopLogin.jsx";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ShopLoginPage = () => {
  const navigate = useNavigate();

  const { isSeller, isLoading } = useSelector((state) => state.seller);

  useEffect(() => {
    if(isSeller === true){
      navigate(`/dashboard`);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isSeller]);

  return (
    <div>
        <ShopLogin />
    </div>
  )
}

export default ShopLoginPage