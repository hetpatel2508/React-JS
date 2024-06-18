function Home(props){
    
    const products = [
        {
            imageLink: "https://d57avc95tvxyg.cloudfront.net/images/thumbnails/588/588/detailed/7001/full_body_housing_for_apple_iphone_14_plus_white_maxbhi_com_37769.jpg?t=1700809028",
            name: "Apple iPhone 14",
            price: 69000,
        },
        {
            imageLink:'https://m.media-amazon.com/images/I/71o8VehMHXL._SX679_.jpg',
            name:'Oneplus 12',
            price:67999,
        },
        {
            imageLink:'https://m.media-amazon.com/images/I/81Os1SDWpcL._SX679_.jpg',
            name:'Apple iphone 15 Pro Max',
            price:139999,
        },
        {
            imageLink:'https://m.media-amazon.com/images/I/71RVuBs3q9L._SX679_.jpg',
            name:'Samsung Galaxy S24 Ultra',
            price:139999,
        },
        {
            imageLink:'https://i03.appmifile.com/799_item_in/04/01/2024/7b66930168d5b7b3c3d0cce70322e77b!600x600!85.jpg',
            name:'Redmi Note 13 Pro+',
            price:34999,
        },
        {
            imageLink:'https://m.media-amazon.com/images/I/71+GTLCIJ7L._SX679_.jpg',
            name:'Samsung Galaxy S24',
            price:74999,
        },
        // Add more product objects here
    ];

    const viewCart = () => {
        alert("Cart Items: \n" + props.data.map(item => `${item.cartData.name} - ₹${item.cartData.price}`).join("\n"));
    };

    console.log('home = ',props);
    return<>
        <div className="text-center text-5xl text-red-600 mt-7">Home Component</div>
        <div className="w-6 h-6 rounded-xl absolute right-3 top-4 text-slate-50 flex justify-center items-center z-10 bg-slate-900" >{props.data.length}</div>
        <div className="w-12 h-12 absolute top-6 right-6 "><img src="https://t4.ftcdn.net/jpg/00/97/00/05/360_F_97000552_d8RwiZAnFewznisQphPtjyxxRNAAZQ92.jpg" alt="" onClick={viewCart}/></div>

        <div className="w-[90%] h-full ml-[5%] mt-8  flex gap-5 flex-wrap">
            {
                products.map((product,index)=>{
                    return(

                    <div key={index} className="w-[24%] h-[550px] ">
                        <div className="w-full h-[86%] flex justify-center items-center">
                            <img src={product.imageLink} alt={product.name} className="w-full h-full object-contain"/>
                        </div>
                        <div className="w-full h-[14%]  flex">
                            <div className="h-full w-[60%] flex flex-col ">
                                <div className="w-[70%] h-10 flex ml-16 pb-1 items-center text-clip overflow-hidden">{product.name}</div>
                                <div className="w-full h-6  flex ml-16 items-center">Price: ₹{product.price}</div>
                            </div>
                            <div className="h-full w-[30%] ml-1 flex gap-4 items-center ">
                                <button className="w-[91%] h-[55%] border rounded-md border-solid border-black text-white bg-green-700 pl-2 pr-3 " onClick={ ()=>{props.addToCartHandler({name:product.name,price:product.price})} }>Add</button>
                                <button className="w-[91%] h-[55%] border rounded-md border-solid border-black text-white bg-red-500 pl-2 pr-2 " onClick={() => { props.removeFromCartHandler({ name: product.name }) }}>Remove</button>
                            </div>
                        </div>
                    </div>                    
                    )
                })
            }
            {/* <div className="w-[24%] h-[550px] ">
                <div className="w-full h-[86%] flex justify-center items-center">
                    <img src="https://d57avc95tvxyg.cloudfront.net/images/thumbnails/588/588/detailed/7001/full_body_housing_for_apple_iphone_14_plus_white_maxbhi_com_37769.jpg?t=1700809028" alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="w-full h-[14%]  flex">
                    <div className="h-full w-[60%] flex flex-col ">
                        <div className="w-full h-10 flex ml-16 items-center ">Apple Iphone 14</div>
                        <div className="w-full h-6  flex ml-16 items-center">Price: ₹69000</div>
                    </div>
                    <div className="h-full w-[30%] ml-1 flex gap-4 items-center ">
                        <button className="w-[91%] h-[55%] border rounded-md border-solid border-black text-white bg-green-700 pl-2 pr-3 " onClick={ ()=>{props.addToCartHandler({name:"Apple Iphone 14",price:69000})} }>Add</button>
                        <button className="w-[91%] h-[55%] border rounded-md border-solid border-black text-white bg-red-500 pl-2 pr-2 ">Remove</button>
                    </div>
                </div>
            </div>
            <div className="w-[24%] h-[550px] ">
                <div className="w-full h-[86%] flex justify-center items-center ">
                    <img src="" alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="w-full h-[14%]  flex">
                    <div className="h-full w-[60%] flex flex-col ">
                        <div className="w-full h-10 flex ml-16 items-center "></div>
                        <div className="w-full h-6  flex ml-16 items-center"></div>
                    </div>
                    <div className="h-full w-[30%] ml-1 flex gap-4 items-center ">
                        <button className="w-[91%] h-[55%] border rounded-md border-solid border-black text-white bg-green-700 pl-2 pr-3 ">Add</button>
                        <button className="w-[91%] h-[55%] border rounded-md border-solid border-black text-white bg-red-500 pl-2 pr-2 ">Remove</button>
                    </div>
                </div>
            </div>
            <div className="w-[24%] h-[550px] ">
                <div className="w-full h-[86%] flex justify-center items-center ">
                    <img src="" alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="w-full h-[14%]  flex">
                    <div className="h-full w-[60%] flex flex-col ">
                        <div className="w-full h-10 flex ml-16 items-center "></div>
                        <div className="w-full h-6  flex ml-16 items-center"></div>
                    </div>
                    <div className="h-full w-[30%] ml-1 flex gap-4 items-center ">
                        <button className="w-[91%] h-[55%] border rounded-md border-solid border-black text-white bg-green-700 pl-2 pr-3 ">Add</button>
                        <button className="w-[91%] h-[55%] border rounded-md border-solid border-black text-white bg-red-500 pl-2 pr-2 ">Remove</button>
                    </div>
                </div>
            </div>
            <div className="w-[24%] h-[550px] ">
                <div className="w-full h-[86%] flex justify-center items-center ">
                    <img src="" alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="w-full h-[14%]  flex">
                    <div className="h-full w-[60%] flex flex-col ">
                        <div className="w-full h-10 flex ml-16 items-center "></div>
                        <div className="w-full h-6  flex ml-16 items-center"></div>
                    </div>
                    <div className="h-full w-[30%] ml-1 flex gap-4 items-center ">
                        <button className="w-[91%] h-[55%] border rounded-md border-solid border-black text-white bg-green-700 pl-2 pr-3 ">Add</button>
                        <button className="w-[91%] h-[55%] border rounded-md border-solid border-black text-white bg-red-500 pl-2 pr-2 ">Remove</button>
                    </div>
                </div>
            </div>
            <div className="w-[24%] h-[550px] ">
                <div className="w-full h-[86%] flex justify-center items-center ">
                    <img src="" alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="w-full h-[14%]  flex">
                    <div className="h-full w-[60%] flex flex-col ">
                        <div className="w-full h-10 flex ml-16 items-center "></div>
                        <div className="w-full h-6  flex ml-16 items-center"></div>
                    </div>
                    <div className="h-full w-[30%] ml-1 flex gap-4 items-center ">
                        <button className="w-[91%] h-[55%] border rounded-md border-solid border-black text-white bg-green-700 pl-2 pr-3 ">Add</button>
                        <button className="w-[91%] h-[55%] border rounded-md border-solid border-black text-white bg-red-500 pl-2 pr-2 ">Remove</button>
                    </div>
                </div>
            </div>
            <div className="w-[24%] h-[550px] ">
                <div className="w-full h-[86%] flex justify-center items-center ">
                    <img src="" alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="w-full h-[14%]  flex">
                    <div className="h-full w-[60%] flex flex-col ">
                        <div className="w-full h-10 flex ml-16 items-center "></div>
                        <div className="w-full h-6  flex ml-16 items-center"></div>
                    </div>
                    <div className="h-full w-[30%] ml-1 flex gap-4 items-center ">
                        <button className="w-[91%] h-[55%] border rounded-md border-solid border-black text-white bg-green-700 pl-2 pr-3 ">Add</button>
                        <button className="w-[91%] h-[55%] border rounded-md border-solid border-black text-white bg-red-500 pl-2 pr-2 ">Remove</button>
                    </div>
                </div>
            </div> */}
        </div>
    </>
}

export default Home;