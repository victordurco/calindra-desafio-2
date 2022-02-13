import styled from 'styled-components';
import LogoPng from '../../assets/logo.png';

export default function Logo() {
    return(
            <Container>
                <LogoImg src={LogoPng}/>
                <LogoName>
                    <LogoTitle>zutterman</LogoTitle>
                    <LogoSubtitle>Measure Tapes</LogoSubtitle>
                </LogoName>
            </Container>
    );
}


const Container = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    cursor: pointer;
`;

const LogoImg = styled.img`
    width: 71px;
    height: 70px;
    margin-right: 24px;
`;

const LogoName = styled.div`
    display: flex;
    flex-direction: column;
    color: #846219;
`;

const LogoTitle = styled.span`
    width: 168px;
    height: 48px;
    font-size: 41px;
    font-weight: bold;
    line-height: 48px;
    text-align: center;
`;

const LogoSubtitle = styled.span`
    width: 168px;
    height: 19px;
    font-size: 16px;
    line-height: 18px;
    font-weight: lighter;
    letter-spacing: 5px;
    margin-left: 6px;
`;