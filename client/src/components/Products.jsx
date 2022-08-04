import { useEffect, useState } from "react"
import styled from "styled-components"
import {cutePins} from "../data"
import Product from "./Product"
import axios from "axios"
import { CollectionsBookmarkOutlined } from "@material-ui/icons"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({categories,filter,sort}) => {
  const [products,setProducts] = useState([]);
  const [filteredProducts,setFilteredProducts] = useState([]);

  useEffect(()=> {
    const getProducts = async () => {
      try {
        const res = await axios.get(categories ? `http://localhost:5000/api/products?category=${categories}` : "http://localhost:5000/api/products");
        setProducts(res.data);
      } catch(err) {}
    }
    getProducts();
  }, [categories])

  useEffect(()=> {
    categories && setFilteredProducts(
      products.filter(item=> 
        Object.entries(filter).every(([key, value])=>
          item[key].includes(value)
        )
      )
    );
  },[categories, filter, products])

  useEffect(()=>{
    if(sort === "newest") {
      setFilteredProducts(prev=>
        [...prev].sort((a,b)=>a.createdAt - b.createdAt)
        )
    } else if(sort === "asc") {
      setFilteredProducts(prev=>
        [...prev].sort((a,b)=>a.price - b.price)
        )
    } else {
      setFilteredProducts(prev=>
        [...prev].sort((a,b)=>b.price - a.price)
        )
    }
  },[sort])

  return (
    <Container>
        {categories ? filteredProducts.map(item=>(
            <Product item={item} key={item.id}/>
        )) : products.slice(0, 8).map(item=>(
          <Product item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Products