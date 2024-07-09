import React from 'react';
import { useQueries } from 'react-query';

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Parallel = () => {
    const products = useQueries(
        ids.map((id) => ({
            queryKey: ['post', id],
            queryFn: async () => {
                const res = await fetch(`https://dummyjson.com/product/${id}`);
                return res.json();
            },
            staleTime: 50000,
        }))
    );

    return (
        <div>

            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-3xl text-center">Products</h2><br /><br />

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                    {products.map((query, index) => {
                        const { data, isLoading, isError } = query;

                        if (isLoading) return <p key={index}>Loading...</p>;
                        if (isError) return <p key={index}>Error fetching data</p>;

                        return (
                            <div key={index}>
                                <h3>Product ID: {data?.id}</h3>
                                <h3>Product Name: {data?.title}</h3>
                                <h3>Product Price: {data?.price}</h3>
                                <br /><br />
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    );
};

export default Parallel;
