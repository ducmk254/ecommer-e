import styled from "styled-components";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import SaleTop from "../components/SaleTop";

const Title = styled.h2`
    font-size: 3rem;
    font-weight: Bold;
    text-transform: capitalize;

    margin: 10px 20px 30px 20px;
`;

const Span = styled.span`
    font-size: 2.2rem;
    font-weight: 400;
`;
const FilterContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`;
const FilterProduct = styled.div`
    margin:10px 20px;
    font-size: 2.2rem;
    font-weight: 400;

    display: flex;
    justify-content:center;
    align-items:center;
`;
const Select = styled.select`
    margin-left: 10px;
    border: 1px solid #ccc;
    padding: 10px 5px;

    cursor:pointer;
    outline:none;

`;

const Option = styled.option`
    
`;
const ProductList = () => {
    return (
        <>
            <NavBar/>
            <SaleTop/>
            <Title>Dresses</Title>
            <FilterContainer>
                <FilterProduct>
                    <Span>Filter products:</Span>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                        <Option>Gray</Option>
                        <Option>Red</Option>
                        <Option>Orange</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XXL</Option>
                        <Option>XL</Option>
                        <Option>L</Option>
                        <Option>M</Option>
                        <Option>S</Option>
                    </Select>
                </FilterProduct>
                <FilterProduct>
                <Span>Filter products:</Span>
                    <Select>
                        <Option disabled selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>

                    </Select>
                </FilterProduct>
            </FilterContainer>
            <Products/>
            <NewsLetter/>
            <Footer/>
        </>
    );
};

export default ProductList;