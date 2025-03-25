import React, { useEffect, useContext } from 'react';
import { LoadingContext } from '../../App';
import HeroSection from './heroSection';
import Collections from './collectionsCard';
import Category from './category';
import Tranding from './trandingItems';
import SaleBanner from './saleBanner';
import HotItems from './hotItems';
import MegasaleBrands from './megasaleBanner&brands';
import useProductApi from '../../api/productApi';

export default function Home() {
  const { setIsLoading } = useContext(LoadingContext);
  const { products, isLoading: productsLoading } = useProductApi();

  useEffect(() => {
    if (!productsLoading && products.length > 0) {
      setIsLoading(false);
    }
  }, [products, productsLoading, setIsLoading]);

  return (
    <div>
      <HeroSection />
      <Collections />
      <Category />
      <Tranding />
      <SaleBanner />
      <HotItems />
      <MegasaleBrands />
    </div>
  );
}
