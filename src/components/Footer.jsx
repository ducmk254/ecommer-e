import { LocationOn, MailOutline, Phone } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
    display:flex;
    width: 100%;
    padding: 10px;
`;
const FooterItem = styled.div`
    flex: 1;

    padding:5px 10px;
`;
    const Logo = styled.h3`
        text-transform: uppercase;
        font-size: 2.4rem;
        font-weight: 600;

        
    `;
        const Link = styled.a`
            text-decoration: none;
            font-size:1.6rem;
            color:black;

            display:flex;
            align-items:center;
        `;
        const Desc = styled.p`
            font-size: 1.6rem;
            line-height: 1.8rem;
        `;
    const FooterTitle = styled.h3`
        font-weight:bold;
        font-size: 1.8rem;
        text-transform: capitalize;
        margin-bottom: 10px;

    `;
    const List = styled.ul`
        width: 100%;
        list-style: none;
        display:flex;
        flex-wrap:no-wrap;

        font-size: 1.6rem;
    `;
    const ListItem = styled.li`
        flex: 1;
        display:flex;
        flex-direction: column;
        line-height: 2.4rem;

        & .footer__icon{
            line-height: 4rem;
        }
    `;

const Footer = () => {
    return (
        <Container>
            <FooterItem>
                <Logo><Link href="/" alt="homepage">Kim Show's.</Link></Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sunt nemo maxime, vero deleniti ut sed tenetur dolorem dolore autem modi pariatur sapiente nulla voluptas numquam! Sint et dolore ipsum.</Desc>
            </FooterItem>
            <FooterItem>
                <FooterTitle>Useful Links</FooterTitle>
                <List>
                    <ListItem>
                        <Link href="/">Home</Link>
                        <Link href="/">Man Fashion</Link>
                        <Link href="/">Accessories</Link>
                        <Link href="/">OrderTracking</Link>
                        <Link href="/">Wishlist</Link>

                    </ListItem>
                    <ListItem>
                    <Link href="/">Home</Link>
                        <Link href="/">Man Fashion</Link>
                        <Link href="/">Accessories</Link>
                        <Link href="/">OrderTracking</Link>
                        <Link href="/">OrderTracking</Link>
                    </ListItem>
                </List>
            </FooterItem>
            <FooterItem>
                <FooterTitle>Contact</FooterTitle>
                <Link>
                    <ListItem>
                        <Link className="footer__icon" href="/"><LocationOn style={{marginRight: "10px"}} />Pham Van Dong, Cau Giay, HN</Link>
                        <Link className="footer__icon" href="/"><Phone style={{marginRight: "10px"}} />+84 968 182 113</Link>
                        <Link className="footer__icon" href="/"><MailOutline style={{marginRight: "10px"}} />vipnho0209@gmail.com</Link>
                        
                    </ListItem>
                </Link>
            </FooterItem>
        </Container>
    );
};
export default Footer;