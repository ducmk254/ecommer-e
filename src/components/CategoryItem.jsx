import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 30vw;
    height:70vh;
    flex:1;
    min-width: 450px; 

    display:flex;
    position: relative;
    margin : 3px;
`;
const ContentWrapper = styled.div`
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;

    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`
    const Image = styled.img`
        width:100%;
        height:100%;
        object-fit:cover;
    `;
    const Title = styled.h1`
        color:white;
        text-transform:uppercase;
        margin-bottom: 30px;
        font-size: 3rem;
        font-weight: 400;    
    `;
const Button = styled.button`
    text-transform:uppercase;
    padding: 10px 20px;
    border:none;
    background-color: white;
    cursor:pointer;
    width:25%;
    min-width: 140px;
`;
const CategoryItem = ({category}) => {
    return (
        <Container>
            <Image src={category.img} />
           <ContentWrapper>
                <Title>{category.title}</Title>
                <Button>Shop now</Button>
           </ContentWrapper>
        </Container>
    );
}
export default CategoryItem;