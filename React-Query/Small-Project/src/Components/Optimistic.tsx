import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useMutation, useQuery } from 'react-query';

const Optimistic = () => {
    const [txt, setTxt] = useState('');
    const postRef = useRef(null);

    const posts = useQuery('posts', async () => {
        const res = await fetch('http://localhost:3000/posts');
        return res.json();
    }, {
        refetchOnWindowFocus: false,
        staleTime: 10000,
    });

    // const { data: posts } = postsQuery;

    const mutatePost = useMutation(
        async (title) => {
            const firstELe = `<div class="bg-gray-100 w-[70%] px-4 py-2 rounded-md border relative border-gray-300 text-black opacity-40">${txt}</div>`;
            postRef.current.innerHTML = firstELe + postRef.current.innerHTML;
            const response = await axios.post('http://localhost:3000/posts', { title });
            // const response = await axios.post('http://localhost:3000/posts/abcdefc', { title });
            return response.data; // Assuming your API returns data you want to use
        },
        {
            onSuccess: () => {
                const lastEle = postRef.current.firstElementChild;
                lastEle.classList.remove('opacity-40');
                lastEle.classList.add('opacity-100');
                setTxt('');
            },
            onError: () => {
                const lastEle = postRef.current.firstElementChild;
                lastEle.classList.remove('opacity-40');
                lastEle.classList.add('opacity-100');
                lastEle.classList.remove('text-black');
                lastEle.classList.add('text-red-500');
                lastEle.innerHTML += "<span class='inline-block mt-0.5 absolute right-3'><svg width='20px' height='20px' viewBox='-1.6 -1.6 19.20 19.20' xmlns='http://www.w3.org/2000/svg' fill='#000000' transform='rotate(0)'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round' stroke='#CCCCCC' stroke-width='0.544'> <path fill='#ff0000' d='M14.9547098,7.98576084 L15.0711,7.99552 C15.6179,8.07328 15.9981,8.57957 15.9204,9.12636 C15.6826,10.7983 14.9218,12.3522 13.747,13.5654 C12.5721,14.7785 11.0435,15.5888 9.37999,15.8801 C7.7165,16.1714 6.00349,15.9288 4.48631,15.187 C3.77335,14.8385 3.12082,14.3881 2.5472,13.8537 L1.70711,14.6938 C1.07714,15.3238 3.55271368e-15,14.8776 3.55271368e-15,13.9867 L3.55271368e-15,9.99998 L3.98673,9.99998 C4.87763,9.99998 5.3238,11.0771 4.69383,11.7071 L3.9626,12.4383 C4.38006,12.8181 4.85153,13.1394 5.36475,13.3903 C6.50264,13.9466 7.78739,14.1285 9.03501,13.9101 C10.2826,13.6916 11.4291,13.0839 12.3102,12.174 C13.1914,11.2641 13.762,10.0988 13.9403,8.84476 C14.0181,8.29798 14.5244,7.91776 15.0711,7.99552 L14.9547098,7.98576084 Z M11.5137,0.812976 C12.2279,1.16215 12.8814,1.61349 13.4558,2.14905 L14.2929,1.31193 C14.9229,0.681961 16,1.12813 16,2.01904 L16,6.00001 L12.019,6.00001 C11.1281,6.00001 10.6819,4.92287 11.3119,4.29291 L12.0404,3.56441 C11.6222,3.18346 11.1497,2.86125 10.6353,2.60973 C9.49736,2.05342 8.21261,1.87146 6.96499,2.08994 C5.71737,2.30841 4.57089,2.91611 3.68976,3.82599 C2.80862,4.73586 2.23802,5.90125 2.05969,7.15524 C1.98193,7.70202 1.47564,8.08224 0.928858,8.00448 C0.382075,7.92672 0.00185585,7.42043 0.0796146,6.87364 C0.31739,5.20166 1.07818,3.64782 2.25303,2.43465 C3.42788,1.22148 4.95652,0.411217 6.62001,0.119916 C8.2835,-0.171384 9.99651,0.0712178 11.5137,0.812976 Z'></path> </g><g id='SVGRepo_iconCarrier'> <path fill='#ff0000' d='M14.9547098,7.98576084 L15.0711,7.99552 C15.6179,8.07328 15.9981,8.57957 15.9204,9.12636 C15.6826,10.7983 14.9218,12.3522 13.747,13.5654 C12.5721,14.7785 11.0435,15.5888 9.37999,15.8801 C7.7165,16.1714 6.00349,15.9288 4.48631,15.187 C3.77335,14.8385 3.12082,14.3881 2.5472,13.8537 L1.70711,14.6938 C1.07714,15.3238 3.55271368e-15,14.8776 3.55271368e-15,13.9867 L3.55271368e-15,9.99998 L3.98673,9.99998 C4.87763,9.99998 5.3238,11.0771 4.69383,11.7071 L3.9626,12.4383 C4.38006,12.8181 4.85153,13.1394 5.36475,13.3903 C6.50264,13.9466 7.78739,14.1285 9.03501,13.9101 C10.2826,13.6916 11.4291,13.0839 12.3102,12.174 C13.1914,11.2641 13.762,10.0988 13.9403,8.84476 C14.0181,8.29798 14.5244,7.91776 15.0711,7.99552 L14.9547098,7.98576084 Z M11.5137,0.812976 C12.2279,1.16215 12.8814,1.61349 13.4558,2.14905 L14.2929,1.31193 C14.9229,0.681961 16,1.12813 16,2.01904 L16,6.00001 L12.019,6.00001 C11.1281,6.00001 10.6819,4.92287 11.3119,4.29291 L12.0404,3.56441 C11.6222,3.18346 11.1497,2.86125 10.6353,2.60973 C9.49736,2.05342 8.21261,1.87146 6.96499,2.08994 C5.71737,2.30841 4.57089,2.91611 3.68976,3.82599 C2.80862,4.73586 2.23802,5.90125 2.05969,7.15524 C1.98193,7.70202 1.47564,8.08224 0.928858,8.00448 C0.382075,7.92672 0.00185585,7.42043 0.0796146,6.87364 C0.31739,5.20166 1.07818,3.64782 2.25303,2.43465 C3.42788,1.22148 4.95652,0.411217 6.62001,0.119916 C8.2835,-0.171384 9.99651,0.0712178 11.5137,0.812976 Z'></path> </g></svg></span>"
                lastEle.addEventListener('click', handleRetry);
            },
        }
    );

    const handleRetry = () => {
        const lastEle = postRef.current.firstElementChild;
        postRef.current.removeChild(lastEle);
        mutatePost.mutate(txt);
    };


    const handleSubmit = async () => {
        if (txt.trim() === '') return;
        await mutatePost.mutate(txt);
    };

    const handleKeyDown = (e) => {
        if (e.ctrlKey && e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className='flex justify-center gap-12'>
                    <input
                        className='block w-[70%] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        value={txt}
                        type='text'
                        placeholder='Title'
                        onChange={(e) => setTxt(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        className='p-2.5 bg-purple-600 hover:bg-purple-500 text-white border border-black rounded-[8px]'
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
                <div className='mt-20 ml-[20%] flex flex-col gap-8' ref={postRef}>
                    {posts.data?.slice().reverse().map((post) => (
                        <div key={post.id} className='bg-gray-100 w-[70%] px-4 py-2 rounded-md border border-gray-300'>
                            {post.title}
                        </div>
                    ))}
                </div>


                {/* We can also access variables from mutatePost like this */}
                {/* {
                    mutatePost.isSuccess ? null :
                        <div className='ml-[20%] mt-8 flex justify-between text-red-500 bg-gray-100 w-[56%] px-4 py-2 rounded-md border border-gray-300'>
                            <div className=''>
                                {mutatePost.variables}
                            </div>
                            <div>
                                retry
                            </div>
                        </div>
                } */}
            </div>
        </div>
    );
};

export default Optimistic;
