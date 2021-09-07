import { StyleOutlined } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SaleTop from "../components/SaleTop";

const Container = styled.div`
    margin: 20px 20px 40px 20px;
`;
const Title = styled.h1`
    text-transform: uppercase;
    font-size: 2.6rem;
    line-height: 2.8rem;
    font-weight: 400;
    text-align:center;
`;
const CheckInCheckOut = styled.div`
    margin-top: 10px;
    font-size;1.6rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;
    const Shopping = styled.div`
        flex:1;

        display:flex;
        justify-content: space-between;
        align-items:center;

        margin-right: 5px;
    `;
        const Button = styled.button`
            padding: 8px;
            border: 1px solid: black;
            font-size: 1.6rem;
            outline:none;
            text-transform: uppercase;
            color:${(props)=>props.colorText};
            background-color:${(props)=>props.bgColor};
            cursor:pointer;

        `;
        const Bag = styled.span`
        padding: 10px 10px;
            cursor:pointer;
            text-transform: capitalize;
            font-size: 1.6rem;
        `;
    const CheckOut =styled.div`
        margin-left: 5px;
        flex:1;

        display:flex;
        justify-content:space-between;
        align-item:center;
    `;
const Cart = styled.div`
    margin-top: 20px;
    display:flex;

`;
    const ProductList = styled.ul`
        flex: 3;
        list-style:none;

        display:flex;
        flex-direction:column;
        align-item:center;
    `;
    const Product = styled.li`
        list-style:none;
        display:flex;
        align-item:center;

        border-bottom: 1px solid #ccc;
    `;
    const Image = styled.img`
        flex: 1;
        width:200px;
    `;
    const ProductInfo = styled.div`
        
        flex:3;

        display:flex;
        justify-content:space-between;

    `;
    const Info = styled.span`
    margin-top: 20px;
        flex: 3;
        display:flex;
        flex-direction : column;
    `;
        const Name = styled.span`
            width:100%;
            font-size: 1.6rem;
            text-transform: uppercase;
            margin-bottom: 30px;
        `;
        const ID = styled.span`
            font-size: 1.6rem;
            text-transform: uppercase;
            margin-bottom: 30px;
        `;
        const Color = styled.span`
            width: 20px;
            height: 20px;
            background-color: ${(props)=>props.value};
            border: none;
            border-radius: 50%;
            margin-bottom: 30px;
        `;
        const Size = styled.span`
            font-size: 1.6rem;
            text-transform: capitalize;
            margin-bottom: 30px;
        `;
    const Wrapper = styled.div`
        height: 100%;
        flex: 1;
        display:flex;
        flex-direction : column;
        justify-content:center;
        align-items:space-evenly;
    `;
    const Quantity = styled.span`
        font-size: 2.0rem;
        display:flex;
        align-items:center;
        margin-bottom: 10px;
    `;
        const Remove = styled.span`
            font-size: 4rem;
            font-weight: 400;
        `;
        const Qty = styled.span`
            font-size: 4rem;
            margin: 0 12px;
        `;
        const Add = styled.span`
            font-size: 2rem;
            font-weight: 400;
        `;
    const Amount = styled.span`
        font-size: 4rem;
        font-weight: 500;
        margin-top: 10px;
    `;
    const Summary = styled.div`
        flex:1 ;
        height: auto;
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 20px;

        font-size: 1.6rem;
    `;
        const SummaryTitle = styled.h2`
            font-size: 3.8rem;
            font-weight: 300;
            text-transform: uppercase;
        `;
        const SummaryInfo = styled.div`
            display:flex;
            justify-content:space-between;
            
            margin: 30px 0;

        `;
            const Key = styled.span`
                &.total {
                    font-weight: 500;
                    font-size: 2.2rem;
                }
            `;
            const Value = styled.span`
                &.total {
                    font-weight: 500;
                    font-size: 2.2rem;
                }
            `;
const Carts = () => {
    return (
        <>
            <NavBar/>
            <SaleTop/>
            <Container>
                <Title>Your Bag</Title>
                <CheckInCheckOut>
                    <Shopping>
                        <Button bgColor = "white" colorText="black">Continue Shopping</Button>
                        <Bag>Shopping Bag (2)</Bag>
                    </Shopping>
                    <CheckOut>
                        <Bag>your wishlish (0)</Bag>
                        <Button bgColor = "black" colorText="white">Checkout now</Button>
                    </CheckOut>
                </CheckInCheckOut>
                <Cart>
                    <ProductList>
                        <Product>
                            <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="name" />
                            <ProductInfo>
                                <Info>
                                    <Name>Product: Jessie Thunder shoes</Name>
                                    <ID>ID: </ID>
                                    <Color value="gray"></Color>
                                    <Size>Size: 37.5</Size>
                                </Info>
                                <Wrapper>
                                    <Quantity>
                                        <Remove>-</Remove>
                                        <Qty>5</Qty>
                                        <Add>+</Add>
                                    </Quantity>
                                    <Amount>$ 50</Amount>
                                </Wrapper>
                            </ProductInfo>
                        </Product>
                        <Product>
                            <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="name" />
                            <ProductInfo>
                                <Info>
                                    <Name>Product: Jessie Thunder shoes</Name>
                                    <ID>ID: </ID>
                                    <Color value="black"></Color>
                                    <Size>Size: 37.5</Size>
                                </Info>
                                <Wrapper>
                                    <Quantity>
                                        <Remove>-</Remove>
                                        <Qty>5</Qty>
                                        <Add>+</Add>
                                    </Quantity>
                                    <Amount>$ 50</Amount>
                                </Wrapper>
                            </ProductInfo>
                        </Product>
                    </ProductList>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryInfo>
                            <Key>Subtoal</Key>
                            <Value>$ 80</Value>
                        </SummaryInfo>
                        <SummaryInfo>
                            <Key>Estimate Shipping</Key>
                            <Value>$ 5.9</Value>
                        </SummaryInfo>
                        <SummaryInfo>
                            <Key>Shipping Discount</Key>
                            <Value>-$ 5.9 </Value>
                        </SummaryInfo>
                        <SummaryInfo>
                            <Key className="total">Total</Key>
                            <Value className="total">$ 80</Value>
                        </SummaryInfo>
                        <SummaryInfo className="checkout">
                            <Button style={{width: "100%"}}  bgColor = "black" colorText="white">Checkout now</Button>
                        </SummaryInfo>
                    </Summary>
                </Cart>
            </Container>
            <Footer />
        </>
    );
};

export default Carts;