import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    margin: 50px 0px;
`;

const List = styled.ul`
    display: flex;
`;

const ListItem = styled.li`
    &:not(:last-child) {
        margin-right: 15px;
    }
`;

const Link = styled.a`
    color: ${props => props.theme.darkBlueColor};
`;

const Copyright = styled.span`
    color: ${props => props.theme.darkGreyColor};
`;

export default () => (
    <Footer>
        <List>
            <ListItem>
                <Link herf="#">about us</Link>
            </ListItem>
            <ListItem>
                <Link herf="#">support</Link>
            </ListItem>
            <ListItem>
                <Link herf="#">press</Link>
            </ListItem>
            <ListItem>
                <Link herf="#">api</Link>
            </ListItem>
            <ListItem>
                <Link herf="#">jobs</Link>
            </ListItem>
            <ListItem>
                <Link herf="#">privacy</Link>
            </ListItem>
            <ListItem>
                <Link herf="#">terms</Link>
            </ListItem>
            <ListItem>
                <Link herf="#">directory</Link>
            </ListItem>
            <ListItem>
                <Link herf="#">profiles</Link>
            </ListItem>
            <ListItem>
                <Link herf="#">hashtags</Link>
            </ListItem>
            <ListItem>
                <Link herf="#">language</Link>
            </ListItem>
            <Copyright>©{new Date().getFullYear()}Vince</Copyright>
        </List>
    </Footer>
)