import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import {categories} from "../data.js";

const Container = styled.div`
    display:flex;
    flex-wrap:wrap;
    height:70%;
    padding: 10px;
`
const Category = () => {
    return (
        <Container>
            {
                categories.map(category=>(
                    <CategoryItem key={category.id} category= {category}/>
                ))
            }
        </Container>
    );
};

export default Category;