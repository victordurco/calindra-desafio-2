import styled from 'styled-components';

import SocialMidiaLogos from '../../assets/media-logo.png';

export default function Footer() {
    return(
        <Container>
            <DetailContainer>
                <Title>Follow Us</Title>
                < SocialLinks src={SocialMidiaLogos} />
            </DetailContainer>
            <DetailContainer>
                <Title>Contact</Title>
                <Address>2490 Leisure Lane San Luis Obispo California</Address>
            </DetailContainer>

        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 226px;
    background-color: #E9E9E9;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 47px 0 0 151px;
    display: flex;
    flex-direction: row;
`;

const DetailContainer = styled.div`
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
