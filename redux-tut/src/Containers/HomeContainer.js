import {connect} from 'react-redux';
import Home from "../Components/Home";
import {addToCart,removeFromCart} from '../Services/Actions/actions'

const mapStateToPrope= state=>({
    // data:state.cartItems.cartData, //to see single data: {name: 'Apple Iphone 14', price: 69000}
    data:state.cartItems,       //to see array of data which will be like data: Array(6)  0: {cartData: {…}}   1: {cartData: {name: 'Apple Iphone 14', price: 69000}} 2: {cartData: {…}}   3: {cartData: {…}} 4: {cartData: {…}}   5: {cartData: {…}}     length: 6
})

const mapDispatchToPrope = dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeFromCartHandler: data => dispatch(removeFromCart(data))
})


export default connect(mapStateToPrope,mapDispatchToPrope)(Home)  //mapStateToPrope = get data  &  mapDispatchToPrope = set/update data
// export default Home;