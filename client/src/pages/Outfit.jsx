import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Newsletter from "../components/Newsletter"
import {Add, Remove} from '@material-ui/icons'
import {mobile, tablet} from "../responsive"
import { publicRequest } from "../requestMethods"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { addProduct } from "../redux/basketRedux"
import { useDispatch } from "react-redux"

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({flexDirection: "column", padding: "15px", alignItems: "center"})}
    ${tablet({flexDirection: "column", padding: "15px", alignItems: "center"})}
`

const ImageContainer = styled.div`
    flex: 1;
    ${mobile({display: "flex", flexDirection: "column", alignItems: "center"})}
    ${tablet({display: "flex", flexDirection: "column", alignItems: "center"})}
`

const Image = styled.img`
    width: 75%;
    height: 75vh;
    ${mobile({height: "40vh"})}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({marginLeft: "5px"})}
`

const Title = styled.h1`
    font-weight: 350;
    font-size: 35px;
    ${mobile({fontSize: "20px", padding: "10px"})}
`

const Description = styled.p`
    margin: 50px 0px;
    font-size: 17px;
    ${mobile({fontSize: "12px"})}
`

const Link = styled.span`
    font-weight: 800;
    font-size: 20px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 50px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column", alignItems: "center"})}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 400;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option`

`

const FilterColour = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.colour};
    margin: 0px 5px;
    cursor: pointer;
`

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 35%;
    ${mobile({width: "100%"})}
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 2px solid pink;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
`

const Button = styled.button`
    background-color: white;
    padding: 15px;
    border: 2px solid pink;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 550;
    transition: all 0.5s ease;

    &:hover {
        background-color: pink;
    }
`


const Outfit = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [colour, setColour] = useState(null);
    const [size, setSize] = useState(null);
    const dispatch = useDispatch()

    useEffect(()=>{
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/"+id);
                setProduct(res.data);
            } catch (err) {}
        }
        getProduct();
    },[id])

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };

    const handleClick = () => {
        dispatch(addProduct({...product, quantity, colour, size }));
    };

  return (
    <Container>
        <NavBar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src={product.img}/>
            </ImageContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Description>{product.description}
                </Description>
                <Link>${product.price}</Link>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize onChange={(e)=>setSize(e.target.value)}>
                            {product.size?.map(s=>(
                                <FilterSizeOption key={s}>{s}</FilterSizeOption>
                            ))}
                        </FilterSize>
                    </Filter>
                    <Filter>
                        <FilterTitle>Colour</FilterTitle>
                        {product.colour?.map(c=>(
                            <FilterColour colour={c} key={c} onClick={()=>setColour(c)}/>
                        ))}
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={()=>handleQuantity("dec")}/>
                        <Amount>{quantity}</Amount>
                        <Add onClick={()=>handleQuantity("inc")}/>
                    </AmountContainer>
                    <Button onClick={handleClick}>Add To Basket</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Outfit