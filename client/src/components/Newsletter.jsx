import { Send } from '@material-ui/icons'
import styled from 'styled-components'
import {mobile} from "../responsive"

const Container = styled.div`
    height: 60vh;
    background-color: #D5D6EA;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 60px;
    margin-bottom: 20px;
    ${mobile({ fontSize: "30px"})}
`
const Description = styled.div`
    font-size: 25px;
    font-weight: 350;
    margin-bottom: 20px;
    letter-spacing: 0.1rem;
    ${mobile({ fontSize: "15px", padding: "10px"})}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 25px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #F3DDF2;
    font-color: white;
    cursor: pointer;

    &:hover {
        color: white;
        background-color: black;
    }
`



const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Sign-up to receive notifications whenever new outfits are added!</Description>
        <InputContainer>
            <Input placeholder="Your email" />
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter