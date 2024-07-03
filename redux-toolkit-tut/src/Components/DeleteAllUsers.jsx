import styled from "styled-components";
import { clearAllUsers } from "../store/slices/UserSlice";
import {useDispatch} from "react-redux"

function DeleteAllUsers(){

  const dispatch = useDispatch();

  const deleteUsers = () => {
    dispatch(clearAllUsers())
  }

  return  <Wrapper>
  <button className="btn clear-btn" onClick={deleteUsers}>clear users</button>
  </Wrapper>
}

const Wrapper = styled.section`
  .clear-btn{
    text-transform: capitalize;
    background-color: #db338a;
    margin-top:2rem;
  }
`


export default DeleteAllUsers;