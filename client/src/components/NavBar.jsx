import { Badge } from '@material-ui/core'
import { Search, ShoppingBasketOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {mobile, tablet} from "../responsive"
import {useSelector} from "react-redux"

const Container = styled.div`
    height: 10vh;
    ${mobile({height: "50px"})};
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px"})}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none"})}
  ${tablet({ display: "none"})}
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({marginLeft: "5px"})}
  ${tablet({marginLeft: "5px"})}
`

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px"})}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
  letter-spacing: .2rem;
  ${mobile({ fontSize: "14px"})}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex:2,justifyContent: "center"})}
`

const MenuLink = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px"})}
`

const NavBar = () => {
  const quantity = useSelector(state=>state.basket.quantity)

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
            EN
          </Language>
          <SearchContainer>
            <Input placeholder="Search"/>
            <Search style={{color: "gray", fontSize: 16}} />
          </SearchContainer>
          </Left>
        <Center>
          <Logo><Link to={`/`} style={{textDecoration: 'none', color: 'black'}}>RILEY'S SHOP</Link></Logo>
        </Center>
        <Right>
          <MenuLink><Link to={`/register`} style={{textDecoration: 'none', color: 'black'}}>Register</Link></MenuLink>
          <MenuLink><Link to={`/login`} style={{textDecoration: 'none', color: 'black'}}>Log In</Link></MenuLink>
          <Link to="/basket">
            <MenuLink>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingBasketOutlined />
              </Badge>
            </MenuLink>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default NavBar