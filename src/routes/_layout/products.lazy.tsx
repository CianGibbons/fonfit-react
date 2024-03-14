import { getAllProducts } from '@/data/api/products.api';
import { createLazyFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';

export const Route = createLazyFileRoute('/_layout/products')({
  component: Products
});

function Products() {
  useEffect(() => {
    getAllProducts().then((products) => {
      console.log(products);
    });
  }, []);

  return (
    <>
      <h1>Hello from Products!</h1>
    </>
  );
}
