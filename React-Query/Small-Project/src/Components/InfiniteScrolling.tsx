import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const InfiniteScrolling = () => {
    const butttonRef = React.useRef(null);
    const [skip, setSkip] = React.useState(0);
    const limit = 12; // Assuming you may change this in the future

    const { data: products, isLoading, isError } = useQuery(['products', skip], async () => {
        const response = await axios.get(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`);
        return response.data;
    }, {
        keepPreviousData: true,
        staleTime: 10000,
        refetchOnWindowFocus: false,
    });

    const [DATA, setData] = React.useState([]);

    React.useEffect(() => {
        if (products && products.products) {
            setData(prevData => [...prevData, ...products.products]);
        }
    }, [products]);

    const handleClick = () => {
        setSkip(prev => prev + limit);
    };

    React.useEffect(() => {
        const handleInfiniteScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                handleClick();
            }
        };

        window.addEventListener('scroll', handleInfiniteScroll);
        return () => window.removeEventListener('scroll', handleInfiniteScroll);
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {DATA.map((product, i) => (
                        <div key={i} className="group relative">
                                        <Link to={`/products/${product.id}`}>

                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                            {product.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {skip >= (products?.total || 0) ? (
                    <div className="mt-6">No more products</div>
                ) : (
                    <div className="mt-6">
                        <button ref={butttonRef} onClick={handleClick}>Load More</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InfiniteScrolling;
