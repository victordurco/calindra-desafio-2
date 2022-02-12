import styled from 'styled-components';

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import FirstImg from '../../assets/first-section-img.png';
import SecondImg from '../../assets/second-section-img.png';

export default function Home() {
   return (
    <>
        <Header />
        <FirstSection>
            <FirstTitle>Measuring everything</FirstTitle>
            <FirstSectionImg src={FirstImg} />
        </FirstSection>
        <SecondSection>
            <SecondTitle>We are Leader in Measure Tapes</SecondTitle>
            <SecondSectionSubtitle>There are 5x the circumference of planet earth in metric tapes.</SecondSectionSubtitle>
            <SecondSectionImg src={SecondImg} />
        </ SecondSection>
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

const SecondSection = styled.section`
    width: 100%;
    height: 1024px;
    background-color: #506FA9;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 0;
    left: 0;
`;

const SecondTitle = styled.span`
    width: 484px;
    height: 162px;
    font-size: 69px;
    line-height: 81px;
    color: white;
    font-weight: bold;
    position: absolute;
    left: 159px;
    top: 449px;
    z-index: 1;
`;

const SecondSectionSubtitle = styled.span`
    width: 493px;
    height: 171px;
    font-size: 48px;
    line-height: 56px;
    font-weight: lighter;
    color: white;
    position: absolute;
    left: 159px;
    top: 637px;
    z-index: 1;
`;

const SecondSectionImg = styled.img`
    width: 1038px;
    height: 689px;
    position: absolute;
    top: 83px;
    right: 0;
`;