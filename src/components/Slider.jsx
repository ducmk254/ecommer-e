import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import {  useState } from 'react';
import styled from 'styled-components';
import {dataSlider} from "../data.js";
const Container = styled.div`
    with:100%;
    height:80vh;
    background-color: ${(props)=>props.direction===0 ? "#ffc4b9b3" : (props.direction === 1 ? "#c4effaa3" : "#ee4be94a")};

    display:flex;

    position: relative;
    overflow: hidden;
`;
    const Arrow = styled.span`
        width: 50px;
        height:50px;
        background-color:#fff7f7;
        border-radius:50%;
        cursor:pointer;

        position:absolute;
        top:0;
        bottom:0; 
        left: ${(props)=>props.position ===  "left" && "10px"};
        right:${(props)=>props.position === "right" && "10px"};
        margin:auto;
        
        opacity:.5;

        display:flex;
        justify-content:center;
        align-items:center;

        z-index:5;
        
    `;
    const WrapperSlider = styled.div`
        display:flex;
        height:100%;
        transition: all 1.5s ease;
        transform: translateX(${(props)=>props.direction * -100}vw);
    `;
        const Slide = styled.div`
            width: 100vw;
            display:flex;
            ali-items:center;
        `;
            const ImageContainer = styled.div`
                flex:1;
                height:100%;
            `;
            const Image = styled.img`
                height:80%;
                object-fit:cover;
            `;
            const ContentDes = styled.div`
                flex:1;

                display:flex;
                flex-direction: column;
                justify-content:center;

                letter-spacing: 3px;
                
            `;
                const Title = styled.h1`
                    text-transform:uppercase;
                    font-size:5rem;
                    color:black;
                    font-weight: bold;
                `;
                const Des = styled.h2`
                    text-transform:uppercase;
                    font-size:2.5rem;
                    font-weight:300;
                    color:black;

                    margin: 20px 0;
                `;
                const Button = styled.button`
                    
                    font-size: 1.8rem;
                    font-weight:300;
                    color:black;
                    padding: 10px 20px;
                    background-color: transparent;

                    display:flex;
                    align-items:center;
                    justify-content:center;
                    width: 25%;
                    cursor: pointer;
                `;

const Slider = () => {
    const [direction,setDirection] = useState(0);
    const onHandleClick = (position)=>{
        if(position === "left"){
            console.log(direction);
            setDirection(direction > 0 ? direction - 1 : 2);
        }else{
            console.log(direction);
            setDirection(direction < 2 ? direction + 1 : 0);
        }
    }

    return (
        <Container direction={direction} >
            <Arrow position="left" onClick={()=>onHandleClick("left")}>
                <ArrowLeftOutlined style={{fontSize:"1.6rem"}} />
            </Arrow>
            <WrapperSlider direction={direction}>
                {
                    dataSlider.map((slide) => (
                        <Slide key={slide.id}>
                            <ImageContainer>
                                <Image src={slide.img} alt={slide.title} />
                            </ImageContainer>
                            <ContentDes>
                                <Title>{slide.title}</Title>
                                <Des>{slide.desc}</Des>
                                <Button>Shop Now <ArrowRightOutlined style={{marginLeft: "5px"}}/></Button>
                            </ContentDes>
                        </Slide>
                    ))
                }
                
                
            </WrapperSlider>
            <Arrow position="right" onClick={()=>onHandleClick("right")} >
                <ArrowRightOutlined style={{fontSize:"1.6rem"}}  />
            </Arrow>
        </Container>
    );
};

export default Slider;