import { FavoriteBorderOutlined, SearchOutlined, ShopOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
    flex:1;
    height:55vh;
    margin: 5px;
    min-width:300px;

    position:relative;
    background: #e4f1f6;
    &:hover Button{
        opacity:1;
    }

    display:fleX;
    justify-content:space-between;
    align-items:center;
`;
const Image = styled.img`
    position: absolute;
    top:0;bottom:0;
    left:0;right:0;

    width:100%;
    height:100%;
    object-fit:cover;
`;
const Link = styled.div`
    position:absolute;
    top:0; bottom:0;
    left:0;right:0;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const Button = styled.button`
    width:50px;
    height:50px;
    border:none;
    border-radius:50%;
    background:white;
    opacity:.1;
    cursor:pointer;

    margin: 0 8px;
    display:flex;
    justify-content:center;
    align-items:center;
    transition: all 1.0s ease;

    &:hover .btn-pr{
        transition: all .5s ease;
        width:3rem;
        height:3rem;
    }
`;
const Product = ({product}) => {
    return (
        <Container >
            <Image src={product.img} />
            <Link>
                <Button><ShopOutlined className="btn-pr" style={{fontSize:'2rem'}} /></Button>
                <Button><SearchOutlined className="btn-pr" style={{fontSize:'2rem'}}  /></Button>
                <Button><FavoriteBorderOutlined className="btn-pr" style={{fontSize:'2rem'}}  /></Button>
            </Link>
        </Container>
    );
};

export default Product;