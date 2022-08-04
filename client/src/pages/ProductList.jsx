import styled from "styled-components"
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {mobile} from "../responsive"
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { red } from "@material-ui/core/colors";
import { FilterSharp } from "@material-ui/icons";

const Container = styled.div`

`

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`

const Filter = styled.div`
    margin: 20px;
    ${mobile({margin: "5px"})}
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 500;
    margin-right: 20px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`

const Option = styled.option`
    font-size: 15px;
`

const ProductList = () => {
    const location = useLocation();
    const categories = location.pathname.split("/")[2];
    const [filter,setFilters] = useState({});
    const [sort,setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filter,
            [e.target.name]: value
        });
    }

    console.log(filter, categories, sort);
    return (
    <Container>
        <NavBar/>
        <Announcement/>
        <Title>{categories.toUpperCase()}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Outfits:</FilterText>
                <Select name="colour" onChange={handleFilters}>
                    <Option disabled>
                        Colour
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Brown</Option>
                    <Option>Pink</Option>
                    <Option>Blue</Option>
                    <Option>Beige</Option>
                </Select>
                <Select name="size" onChange={handleFilters}>
                    <Option disabled>
                        size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Outfits:</FilterText>
                    <Select onChange={e=>setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (Ascending)</Option>
                        <Option value="desc">Price (Descending)</Option>
                    </Select>
            </Filter>
        </FilterContainer>
        <Products categories={categories} filter={filter} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
    )
}

export default ProductList