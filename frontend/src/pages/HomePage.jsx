import React from 'react';
import Header from '../components/Layout/Header.jsx';
import Hero from "../components/Route/Hero/Hero.jsx";
import Categories from "../components/Route/Categories/Categories.jsx";

const HomePage = () => {
  return (
    <div>
      {/* activeheading is used to highligh active navbar list item */}
        <Header activeHeading={1}/>
        <Hero />  
        <Categories />
    </div>
  )
}

export default HomePage