import React from 'react';
import styled from 'styled-components';
const SalesTop = styled.div`
    background-color: #0b9888;
    display:flex;
    justify-content:center;
    align-items:center;

    padding: 5px 0;

    color: white;
    text-align:center;
    font-size: 1.2rem;
    font-weight:200;
`
const SaleTop = () => {
    return (
        <SalesTop>Super Deal! Free Shipping on Order Over $50</SalesTop>
    );
};

export default SaleTop;