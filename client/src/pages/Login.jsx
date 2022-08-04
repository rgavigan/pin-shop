import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { login } from "../redux/apiCalls"
import {mobile} from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://wallpaperaccess.com/full/53141.jpg"), center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${mobile({width: "85%"})}
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 800;
    color: white;
`
const Input = styled.input`
    flex: 1;
    min-width: 100%;
    margin: 20px 10px 0px 0px;
    padding: 15px;
    border-radius: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: white;
    border-radius: 10px;
    transition: all 0.5s ease;
    cursor: pointer;
    margin: 20px 0px;

    &:hover {
        background-color: lemonchiffon;
        color: black;
    }
    &:disabled {
        color: white;
        cursor: not-allowed;
    }
`

const Link = styled.a`
    color: white;
    margin-top: 10px;
    cursor: pointer;
`

const Error = styled.span`
    color: red;
    font-size: 14px;
`

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, {username, password});
    }
  return (
    <Container>
        <Wrapper>
            <Title>Log In to Your Account!</Title>
            <Form>
                <Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
                <Input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
                <Button onClick={handleClick} disabled={isFetching}>Log In</Button>
                {error &&<Error>Wrong username or password!</Error>}
            </Form>
            <Link>Forgot Password</Link>
            <Link to={`./register`} style={{textDecoration: 'none', color: 'white'}}>Create a New Account</Link>
        </Wrapper>
    </Container>
  )
}

export default Login