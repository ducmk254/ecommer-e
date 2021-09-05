import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowDropDown, Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
const Container = styled.div`
    height:60px;
    // background-color:#dedede;
    
    font-size:1.4rem;
    `
const SalesTop = styled.div`
    background-color: #0b9888;

    padding: 5px 0;

    color: white;
    text-align:center;
    font-size: 1.2rem;
    font-weight:200;
`
const Wrapper = styled.div`
    width: 100%;
    height:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;

    padding: 0 20px;
`
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`
    const Language = styled.span`
    text-transform:Uppercase;
    font-size: 1.2rem;
    margin-right:5px;
    `
    const SearchWrapper = styled.div`
        display:flex;
        justify-content:center;
        align-items:center;
        border: 1px solid #ccc;
        border-radius: 3px;
        padding: 5px;
        margin-left:20px;
    `
    const Input = styled.input`
    padding-left:5px;
    border:none;
    outline:none;
    `
    
const Center = styled.div`
    flex:1;
    
    text-transform:Uppercase;
    color: #d70dd1;

    display:flex;
    justify-content:center;
    align-items:center;
`
    const Logo = styled.h1`
        font-weight: bold;
        font-size: 2.4rem;
    `

const Right = styled.div`
    flex:1;

    display:flex;
    justify-content:flex-end;
    align-items: center;
`
    const Link = styled.a`
        text-transform:uppercase;
        margin: 0 10px;
    `

const NavBar = () => {
   const [language,setLanguage] = useState(true);
    return (
        <>
            <SalesTop>Super Deal! Free Shipping on Order Over $50</SalesTop>
            <Container position="static">
                
                <Wrapper>
                    <Left>
                        <Language>{language ? "vi" :"en"}</Language>
                        <ArrowDropDown style={{cursor:"pointer"}}/>
                        <SearchWrapper>
                            <Input type="text" placeholder="Search ..." />
                            <Search style={{ color: "gray", fontSize: '2rem',cursor:'pointer' }} />
                        </SearchWrapper>
                    </Left>
                    <Center>
                        <Logo>Mutosi Online.</Logo>
                    </Center>
                    <Right>
                        <Link alt="register">Register</Link>
                        <Link alt="register">Signin</Link>
                        <Badge badgeContent={4} color="primary" >
                            <ShoppingCartOutlined style={{fontSize:'2rem'}} />
                        </Badge>
                    </Right>
                </Wrapper>
            </Container>
        </>
    );
};
export default NavBar;