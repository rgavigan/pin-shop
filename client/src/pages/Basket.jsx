import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import {Add, Remove} from '@material-ui/icons'
import {mobile} from "../responsive"
import { useSelector } from "react-redux"

const Container = styled.div`
`

const Wrapper = styled.div`
    padding: 20px;
    background-color: snow;
`
const Title = styled.h1`
    font-weight: 400;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 25px;
    ${mobile({padding: "5px"})}
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
    ${mobile({padding: "5px"})}
`

const TopTexts = styled.div`

`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
    ${mobile({display: "none"})}
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    ${mobile({flexDirection: "column"})}
`
const ProductDetails = styled.div`
    flex: 2;
    display: flex;
    padding: 25px;
    ${mobile({display: "flex", flexDirection: "column", alignItems: "center"})}
`
const Image = styled.img`
    width: 25%;
    ${mobile({width: "75%"})}
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`

`
const ProductID = styled.span`

`
const ProductColour = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.colour};
`
const ProductSize = styled.span`

`

const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ProductAmount = styled.div`
    display: flex;
    align-items: center;
`
const Amount = styled.div`
    font-size: 20px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 25px;
    font-weight: 700;
    margin-top: 15px;
`

const Hr = styled.hr`
    background-color: #EEE;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    margin: 25px;
    height: 70vh;
    padding: 20px;
`

const SummaryTitle = styled.h1`
    font-weight: 350;
`

const SummaryItem = styled.div`
    width: 75%;
    margin: 25px 0px;
    display: flex;
    justify-content: space-between;
`

const SummaryItemText = styled.span`
    font-weight: ${props=>props.type === "total" && 1000};
`

const SummaryItemPrice = styled.span`

`

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 650;
    cursor: pointer;
`

const Basket = () => {
const basket = useSelector(state=>state.basket);
  return (
    <Container>
        <NavBar/>
        <Announcement/>
        <Wrapper>
            <Title>Your Basket</Title>
            <Top>
                <TopButton>Continue Browsing</TopButton>
                <TopTexts>
                    <TopText>Basket (2)</TopText>
                    <TopText>Your Wishlist</TopText>
                </TopTexts>
                <TopButton type="filled">Checkout Outfits</TopButton>
            </Top>
            <Bottom>
                <Info>
                    {basket.products.map(product=>(
                        <Product>
                        <ProductDetails>
                            <Image src={product.img}/>
                            <Details>
                                <ProductName><b>Product:</b> {product.title}</ProductName>
                                <ProductID><b>ID:</b> {product._id}</ProductID>
                                <ProductColour colour={product.colour}/>
                                <ProductSize><b>Size:</b> {product.size}</ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmount>
                                <Add/>
                                <Amount>{product.quantity}</Amount>
                                <Remove/>
                            </ProductAmount>
                            <ProductPrice>${product.price * product.quantity}</ProductPrice>
                        </PriceDetails>
                    </Product>
                    ))}
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>${basket.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$6.00</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>-$6.00</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText type="total">Total</SummaryItemText>
                        <SummaryItemPrice>${basket.total}</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Basket