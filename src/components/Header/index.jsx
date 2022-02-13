import styled from 'styled-components';
import Logo from './Logo';

export default function Header() {
    return(
        <Container>
            <ContentContainer>
                <Logo />
                <NavButtons>
                    <LinkButton>ABOUT US</LinkButton>
                    <LinkButton>MODELS</LinkButton>
                    <LinkButton>GUARANTEE</LinkButton>
                </NavButtons>
            </ContentContainer>
        </Container>
    );
}

const Container = styled.header`
    width: 100%;
    height: 110px;
    background-color: white;
    padding: 0 64px 0 53px;
    display: flex;
    justify-content: center;

    @media (max-width: 1000px){
        height: 57px;
    }
`;

const ContentContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1000px){
        justify-content: center;
    }
`;

const NavButtons = styled.nav`
    width: 564px;
    display: flex;
    flex-direction: row;
    justify-content:space-between;

    @media (max-width: 1000px){
        display: none;
    }
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

