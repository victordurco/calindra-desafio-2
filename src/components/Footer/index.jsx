import styled from 'styled-components';

import SocialMidiaLogos from '../../assets/media-logo.png';

export default function Footer() {
    return(
        <Container>
            <ContentContainer>
                <Content>
                    <Title>Follow Us</Title>
                    < SocialLinks src={SocialMidiaLogos} />
                </Content>
                <Content>
                    <Title>Contact</Title>
                    <Address>2490 Leisure Lane San Luis Obispo California</Address>
                </Content>
            </ContentContainer>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 226px;
    background-color: #E9E9E9;
    display: flex;
    justify-content: center;
`;

const ContentContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    height: 100%;
    padding: 47px 0 0 151px;
    display: flex;
    flex-direction: row;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 259px;
`;

const Title = styled.span`
    font-size: 27px;
    line-height: 31px;
    color: #716565;
    font-weight: bold;
    margin-bottom: 15px;
`;

const SocialLinks = styled.img`
    width: 169px;
    height: 43px;
    cursor: pointer;
`;

const Address = styled.span`
    width: 121px;
    height: 57px;
    color: #716565;
    font-size: 16px;
    line-height: 18px;
`;

