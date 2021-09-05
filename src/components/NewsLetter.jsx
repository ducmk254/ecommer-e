import { SendOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import styled  from 'styled-components';
const Container = styled.div`
    width:100%;
    background-color: #ffc4b93b;
    height: 50vh;

    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`;
const Title = styled.h3`
    font-weight: 500;
    font-size: 5.4rem;
    color:black;
`;
const Span = styled.p`
    font-size: 1.6rem;
    margin: 10px 0;

`;
const Form = styled.form`
    background-color: white;
    display:flex;
    border-radius: 5px 0px 0px 5px;

    width: 50%;

`;
const Input = styled.input`

    border: none;
    outline:none;
    border: 1px solid #ccc;
    padding: 10px;

    flex-grow: 1;
`;
const Send = styled.button`
    background: #01859a;
    width: 15%;
    height: 100%;
    outline:none;
    border:none;
    cursor: pointer;
    padding: 8px 20px;

    display:flex;
    justify-content: center;
    align-center: center;
`;

const NewsLetter = () => {
    const [email,setEmail] = useState("");
    return (
        <Container>
            <Title>Newsletter</Title>
            <Span>Get timely updates from your favories products.</Span>
            <Form>
                <Input value={email} placeholder="Your email" onChange={(e)=>setEmail(e.target.value)}/>
                <Send type="submit"><SendOutlined style={{color:"white",fontSize:"2.2rem"}} /></Send>
            </Form>
        </Container>
    );
};

export default NewsLetter;