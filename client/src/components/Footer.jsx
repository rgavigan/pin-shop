import styled from "styled-components"
import {GitHub, Facebook, Instagram, Pinterest, HouseOutlined, PhoneIphoneOutlined, EmailOutlined} from '@material-ui/icons'
import {mobile, tablet} from "../responsive"
import { Link } from "react-router-dom"

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column"})}
    ${tablet({ flexDirection: "column"})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    ${mobile({ alignItems: "center"})}
`

const Logo = styled.h1`
    font-size: 30px;
    font-weight: 1000;
    ${mobile({ fontSize: "25px"})}
`

const Description = styled.p`
    margin: 20px 0px;
    font-size: 18px;
    font-weight: 300;
    ${mobile({ display: "none"})}
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: black;
    opacity: 0.7;
    background-color: ${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    ${mobile({ width: "20px", height: "20px"})}
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "flex", alignItems: "center", flexDirection: "column"})}
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 12px;
    cursor: pointer;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "flex", alignItems: "center", flexDirection: "column"})}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Riley Emma Gavigan</Logo>
            <Description>I am a huge fan of collecting and finding outfits.
                Pinterest is a major source of inspiration for many different outfits
                and I want to share my favourites!
            </Description>
            <SocialContainer>
                <SocialIcon color="#D5D6EA">
                    <GitHub/>
                </SocialIcon>
                <SocialIcon color="#F6F6EB">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="#F6ECF5">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="#F3DDF2">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem><Link to={`/`} style={{textDecoration: 'none', color: 'black'}}>Home</Link></ListItem>
                <ListItem><Link to={`/basket`} style={{textDecoration: 'none', color: 'black'}}>Basket</Link></ListItem>
                <ListItem><Link to={`/products/women`} style={{textDecoration: 'none', color: 'black'}}>Outfits</Link></ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem><Link to={{pathname: "https://www.aritzia.com/en/home"}} target="_blank" style={{textDecoration: 'none', color: 'black'}}>Aritzia</Link></ListItem>
                <ListItem>Zara</ListItem>
                <ListItem>American Eagle</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <HouseOutlined style={{marginRight: "10px"}}/>London, Ontario, Canada
            </ContactItem>
            <ContactItem>
                <PhoneIphoneOutlined style={{marginRight: "10px"}}/>+1 (519)-854-6886
            </ContactItem>
            <ContactItem>
                <EmailOutlined style={{marginRight: "10px"}}/>rgavigan@uwo.ca
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer