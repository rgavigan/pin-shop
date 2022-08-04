import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://wallpaperaccess.com/full/1190067.jpg"), center;
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
    flex-wrap: wrap;
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
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 15px;
    border-radius: 10px;
`
const Agreement = styled.span`
    color: white;
    font-size: 12px;
    margin: 20px 15px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: white;
    border-radius: 10px;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover {
        background-color: lemonchiffon;
        color: black;
    }
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create Your Account!</Title>
            <Form>
                <Input placeholder="First Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Email"/>
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>
                    By creating an account at Riley Shop, I concent to the processing
                    of my personal data according to the <b>Privacy Policy</b>
                </Agreement>
                <Button>Create Account</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register