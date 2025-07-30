import React, { useEffect } from 'react';
import Banner from '../../components/banner/Banners.jsx';
import About from '../../components/aboutus/About.jsx';
import MeetTheFounder from '../../components/meetthefounder/MeetTheFounder.jsx';
import Categories from '../../components/categories/Categories.jsx';
import ProductSlider from '../../components/products/ProductSlider.jsx';

const PublicHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner />
      <About />
      <Categories />
      <ProductSlider />
      <MeetTheFounder />
    </div>
  );
};

export default PublicHome;
