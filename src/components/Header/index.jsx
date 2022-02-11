import styled from 'styled-components';
import Logo from './Logo';

export default function Header() {
    return(
        <Container>
            <Logo />
            <NavButtons>
                <LinkButton>ABOUT US</LinkButton>
                <LinkButton>MODELS</LinkButton>
                <LinkButton>GUARANTEE</LinkButton>
            </NavButtons>
        </Container>
    );
}

const Container = styled.header`
    width: 100%;
    height: 110px;
    background-color: white;
    padding: 0 64px 0 53px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NavButtons = styled.nav`
    width: 564px;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
`;

const LinkButton = styled.button`
    background-color: inherit;
    border: none;
    font-size: 16px;
    font-weight: lighter;
    color: #846219;
    cursor: pointer;
    letter-spacing: 5px;
`;

