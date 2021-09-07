import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import NewsLetter from '../components/NewsLetter';
import SaleTop from '../components/SaleTop';

const ProductContainer = styled.div`
    padding: 20px 10px;
    display: flex;


`;
const Images = styled.div`
    flex: 1;
    height: 80vh;
    margin: auto 50px;
    display:flex;
    justify-content:center;
    align-items:center;
`;
    const Image = styled.img`
        { */ width:100%; */}
        height:100%;
        object-fit: cover;

        display:flex;
        justify-content:center;
        align-items:center;
    `;
const ProductInfo = styled.div`
    flex : 1;
    margin-left: 20px;

    display: flex;
    flex-direction: column;

`;
    const Title = styled.h3`
        font-size: 2.8rem;
        font-weight: 450;
        text-transform: capitalize;
        margin-bottom: 20px;
    `;
    const Desc = styled.p`
        font-size: 1.6rem;
        letter-spacing:3px;
    `;
    const Price = styled.span`
        font-size: 4rem;
        font-weight: 100;
        margin: 20px 0;
    `;
    const InfoWrapper = styled.div`
        display:flex;
        align-items: center;
        
    `;
        const ColorList = styled.ul`
            
            display:flex;
            
            align-items: center;
            list-style:none;
        `;
            const ColorText  = styled.li`
                margin: 10px 10px 10px 0;
                font-size: 1.8rem;

                margin-left: ${(props)=>props.margin};
            `;
            const Color = styled.div`
                display:flex;
                align-items:center;
            `;
            const Span = styled.span`
                margin: 0 5px;
                width:25px;
                height:25px;
                border-radius:50%;
                cursor:pointer;
                background-color:${(props)=> props.color};
                
            `;
            const Select = styled.select`
                cursor:pointer;
                padding: 5px;
            `;
            const Option = styled.option`
                cursor:pointer;
            `;

    const Quantities = styled.div`
        font-size: 1.8rem;
        font-weight: bold;
        margin: 40px 0;

        display:flex;
        align-items: center;
        justify-content:flex-start;

    `;
        const Remove = styled.span`
            cursor:pointer;
        `;
        const Add = styled.span`
        cursor:pointer;
        `;
        const Quantity = styled.span`
            display:flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            padding: 5px;
            border: 1px solid #0cc7c7;
            border-radius:12px;
            margin: 0 10px;
        `;
const ProductDetails = () => {
    // const [color,setColor] = useState("");
    // const [size,setSize] = useState("");
    const [quantity,setQuantity] = useState(1);
    const onHandleRemove = (e,qty)=>{
        e.preventDefault();
        setQuantity(quantity > 0 ? quantity -1 : 0);
    }
    const onHandleAdd = (e,qty)=>{
        e.preventDefault();
        setQuantity(quantity +1);
    }
    const AddToCard = styled.span`
        margin-left: 100px;
        padding: 10px 20px;

        border: 1px solid #0cc7c7;
        cursor:pointer;
        outline:none;
        text-transform: uppercase;
    `;
    return (
        <>
            <NavBar />
            <SaleTop/>
            <ProductContainer>
                <Images>
                    <Image src="https://storage.googleapis.com/cdn.nhanh.vn/store2/78054/ps/20210720/ABS21H_107_043.jpg" alt="name" />
                </Images>
                <ProductInfo>
                    <Title>Denim jumpsuit</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                         perspiciatis id? Officiis quidem aspernatur fuga, ad 
                        quisquam suscipit voluptas commodi natus dolores odio quos aut
                        nesciunt, reiciendis nostrum eum quae.</Desc>
                    <Price>$ 20.00</Price>
                    <InfoWrapper>
                        <ColorList>
                            <ColorText>Color </ColorText>
                            <Color>
                                <Span color="green" />
                                <Span color="yellow" />
                                <Span color="tomato" />
                            </Color>
                        </ColorList>
                        <ColorList>
                            <ColorText margin="50px">Size </ColorText>
                            <Select>
                                <Option>XL</Option>
                                <Option>XS</Option>
                                <Option>M</Option>
                            </Select>
                        </ColorList>
                    </InfoWrapper>
                    <Quantities>
                        <Remove onClick={(e)=>onHandleRemove(e)}>-</Remove>
                        <Quantity>{quantity}</Quantity>
                        <Add onClick={(e)=>onHandleAdd(e)} >+</Add>
                        <AddToCard>Add to Cart</AddToCard>
                    </Quantities>
                </ProductInfo>
            </ProductContainer>
            <NewsLetter/>
            <Footer/>
        </>
    );
};
export default ProductDetails;