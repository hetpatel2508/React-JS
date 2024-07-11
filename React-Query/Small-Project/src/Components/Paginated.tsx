import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import debounce from 'lodash.debounce';
import { Link, useSearchParams } from 'react-router-dom';

const Paginated = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const inputRef = useRef(null);
    const [categorySelected, setCategorySelected] = useState(false);
    const [category, setCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page')) || 1);
    const [currentQ, setCurrentQ] = useState(searchParams.get('que') || '1isLIVE');
    const [q, setQ] = useState(searchParams.get('q') || '');

    const limit = 12;

    const { data: categories } = useQuery('categories', async () => {
        const response = await fetch('https://dummyjson.com/products/categories');
        return response.json();
    }, {
        refetchOnWindowFocus: false,
    });

    const { data: productsData } = useQuery(['products', currentPage, currentQ, q, category], async () => {
        const skip = (currentPage - 1) * limit;

        if (categorySelected && category) {
            const response = await fetch(`https://dummyjson.com/products/category/${category}`);
            return response.json();
        } else {
            const response = await fetch(`https://dummyjson.com/products/search?skip=${skip}&limit=${limit}&q=${q}`);
            return response.json();
        }
    }, {
        refetchOnWindowFocus: false,
        staleTime: 20000,
    });

    const products = productsData?.products || [];
    const totalItems = productsData?.total || 0;
    const totalPages = Math.ceil(totalItems / limit);

    useEffect(() => {
        if (q.length !== 0) {
            setSearchParams({ page: currentPage, que: currentQ, q: q });
        } else if (category.length !== 0) {
            setSearchParams({ page: currentPage, que: currentQ, category: category });
        } else {
            setSearchParams({ page: currentPage, que: currentQ });
        }
    }, [currentQ, currentPage, q, category, setSearchParams]);

    useEffect(() => {
        setCategorySelected(false);
        if (q.length !== 0) {
            setCategory('');
        }
    }, [q]);

    const handlePageClick = (page) => {
        setCurrentPage(page);
        setCurrentQ(`${page}isLIVE`);
    };

    const handleCategoryChange = (e) => {
        setCurrentPage(1);
        setCurrentQ('1isLIVE');
        setQ('');
        inputRef.current.value = ''
        setCategory(e.target.value);
        setCategorySelected(true);
    };

    const generatePaginationLinks = () => {
        const pageLinks = [];

        if (currentPage > 3) {
            pageLinks.push(
                <Link
                    key="first"
                    to={`?page=1&que=${currentQ}`}
                    className="px-4 py-4 rounded hover:bg-gray-200"
                    onClick={() => handlePageClick(1)}
                >
                    {/* First */}
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="14" height="14" viewBox="0 0 256 256" xmlSpace="preserve">
                        <defs />
                        <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" style={{ stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1 }}>
                            <polygon points="50.36,0 54.64,4.28 13.92,45 54.64,85.72 50.36,90 5.36,45" style={{ fill: 'black' }} transform="matrix(1 0 0 1 0 0)" />
                            <polygon points="80.36,0 84.64,4.28 43.92,45 84.64,85.72 80.36,90 35.36,45" style={{ fill: 'black' }} transform="matrix(1 0 0 1 0 0)" />
                        </g>
                    </svg>
                </Link>
            );
        }

        if (currentPage > 1) {
            pageLinks.push(
                <Link
                    key="prev"
                    to={`?page=${currentPage - 1}&que=${currentQ}`}
                    className="flex pl-1 pr-4 py-2 rounded hover:bg-gray-200"
                    onClick={() => handlePageClick(currentPage - 1)}
                >
                    {/* Previous */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[25px] w-[25px] pl-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </Link>
            );
        }

        const pagesToShow = 5;
        const startPage = Math.max(1, currentPage - Math.floor((pagesToShow - 1) / 2));
        const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

        for (let i = startPage; i <= endPage; i++) {
            pageLinks.push(
                <Link
                    key={i}
                    to={`?page=${i}&que=${currentQ}`}
                    className={`px-4 py-2 rounded ${currentPage === i ? 'bg-gray-200 text-gray-900 font-medium' : 'hover:bg-gray-200'}`}
                    onClick={() => handlePageClick(i)}
                >
                    {i}
                </Link>
            );
        }

        if (currentPage < totalPages) {
            pageLinks.push(
                <Link
                    key="next"
                    to={`?page=${currentPage + 1}&que=${currentQ}`}
                    className="px-2.5 py-2.5 flex rounded hover:bg-gray-200"
                    onClick={() => handlePageClick(currentPage + 1)}
                >
                    {/* Next */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[20.5px] w-[20.5px] pt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            );
        }

        if (currentPage < totalPages - 2) {
            pageLinks.push(
                <Link
                    key="last"
                    to={`?page=${totalPages}&que=${totalPages}isLive`}
                    className="px-4 py-4 rounded hover:bg-gray-200"
                    onClick={() => handlePageClick(totalPages)}
                >
                    {/* Last */}
                    <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="13" height="13" viewBox="0 0 256 256" xmlSpace="preserve">
                        <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" style={{ stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1 }}>
                            <polygon points="39.64,90 35.36,85.72 76.08,45 35.36,4.28 39.64,0 84.64,45" style={{ stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(0,0,0)', fillRule: 'nonzero', opacity: 1, transform: 'matrix(1 0 0 1 0 0)' }} />
                            <polygon points="9.64,90 5.36,85.72 46.08,45 5.36,4.28 9.64,0 54.64,45" style={{ stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(0,0,0)', fillRule: 'nonzero', opacity: 1, transform: 'matrix(1 0 0 1 0 0)' }} />
                        </g>
                    </svg>
                </Link>
            );
        }

        return pageLinks;
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">My store</h2>
                </div>

                <div>
                    <div className="relative mt-2 rounded-md flex items-center gap-8 mb-4">
                        <input
                            type="text"
                            name="q"
                            // value={q}
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder={q===''?"Search products...":q}
                            onChange={debounce((e) => setQ(e.target.value), 1000)}
                            ref={inputRef}
                        />
                        <div className='flex justify-between min-w-[320px]'>
                            <select
                                value={category || ''}
                                onChange={handleCategoryChange}
                                // className={`border py-2 px-2 w-[320px]`}
                                // className={`border py-2 px-2 w-[160px]`}
                                className={`border py-2 px-2 ${categorySelected ? 'w-[250px]' : 'w-[320px]'}`}
                            >
                                <option value="" disabled>Select category</option>
                                {categories?.map((category, i) => (
                                    <option key={i} value={category.slug}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                            <div className={`py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer ${categorySelected ? 'inline' : 'hidden'}`}
                                onClick={() => {
                                    setCurrentPage(1);
                                    setCurrentQ(1+"isLIbe")
                                    setCategorySelected(false);
                                    setCategory('');
                                }}
                            >
                                {/* X */}
                                <svg fill="#ff0000" className='mt-1.5' height="14px" width="14px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.775 460.775" xmlSpace="preserve">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"> <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path></g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <Link to={`/products/${product.id}`} target='_blank'>
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-64">
                                    <img
                                        src={product.thumbnail}
                                        alt={product.title}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">{product.title}</h3>
                                        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">${product.price}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center items-center relative text-gray-600 mt-8 lg:mt-10">
                    {generatePaginationLinks()}
                    <div className="absolute right-0 text-black">
                        Page {currentPage} of {totalPages}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Paginated;
