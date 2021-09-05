import React from 'react';
import styled from 'styled-components';
import {popularProducts} from "../data";
import Product from "./Product";
const Container = styled.div`
    display:flex;
    flex-direction: column;
    margin:10px;
`;
const Wrapper = styled.div`
    width:100%;

    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`;
const Title = styled.h2`
    text-transform: uppercase;
    padding:10px;
`;
const Products = () => {
    return (
        <Container>
            <Title>Sản phẩm nổi bật</Title>
           <Wrapper>
                 {
                    popularProducts.map(product=>(
                        <Product key={product.id} product={product} />
                    ))
                }
           </Wrapper>
        </Container>
    );
};

export default Products;