import styled from 'styled-components';

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import FirstImg from '../../assets/first-section-img.png';

export default function Home() {
   return (
    <>
        <Header />
        <FirstSection>
            <FirstTitle>Measuring everything</FirstTitle>
            <FirstSectionImg src={FirstImg} />
        </FirstSection>
        <Footer />
    </>
   ); 
}

const FirstSection = styled.section`
    width: 100%;
    height: 914px;
    background-color: #E9E9E9;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FirstSectionImg = styled.img`
    width: 682px;
    height: 335px;
    background-color: inherit;
`;

const FirstTitle = styled.span`
    width: 348px;
    height: 192px;
    font-size: 82px;
    line-height: 96px;
    color: #716565;
    font-weight: bold;
    margin-right: 27px;
`;