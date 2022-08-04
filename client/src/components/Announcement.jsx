import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
    height: 30px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.1rem;
    ${mobile({ fontSize: "10px"})}
`

const Announcement = () => {
  return (
    <Container>
        Find what you've been looking for on Pinterest
    </Container>
  )
}

export default Announcement