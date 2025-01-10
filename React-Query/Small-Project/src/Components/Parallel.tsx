import React, { useState } from 'react';
import { useQuery } from 'react-query';

const SkeletonCard = () => (
  <div className="animate-pulse bg-gray-100 p-4 rounded-lg shadow-md">
    <div className="h-40 w-full bg-gray-300 rounded-md mb-4"></div>
    <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
    <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
    <div className="h-6 bg-gray-300 rounded w-1/4"></div>
  </div>
);

const Parallel = () => {
  const { data, isLoading, isError } = useQuery(
    'products',
    async () => {
      const res = await fetch('https://dummyjson.com/products?limit=10'); // Replace with your database API endpoint
      return res.json();
    },
    {
      staleTime: 50000, // Prevent frequent re-fetching
    },
  );

  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold text-center">Products</h2>
        <br />
        <br />

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {isLoading && [...Array(8)].map((_, index) => <SkeletonCard key={index} />)}{' '}
          {/* Render 8 skeletons */}
          {isError && (
            <div className="col-span-full p-4 rounded-lg bg-red-100 text-red-700 text-center">
              Error fetching data
            </div>
          )}
          {data?.products?.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ data }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      {/* Show Skeleton Loader for Image */}
      <div className="h-40 w-full rounded-md mb-4 relative overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 transition-all ease-in-out animate-pulse"></div>
        )}

        {/* Actual Image */}
        <img
          src={data?.thumbnail || 'https://via.placeholder.com/150'}
          alt={data?.title}
          className={`h-40 w-full object-contain rounded-md transition-opacity duration-300 ease-in-out ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Product Details */}
      <h3 className="text-lg font-semibold mb-2">Product ID: {data?.id}</h3>
      <h3 className="text-lg mb-1">Product Name: {data?.title}</h3>
      <h3 className="text-lg font-medium text-green-600">Price: ${data?.price}</h3>
    </div>
  );
};

export default Parallel;
