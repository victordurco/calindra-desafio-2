import styled from 'styled-components';

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
   return (
    <Container>
        <Header />
        <Footer />
    </Container>
   ); 
}

const Container = styled.div`
    margin-bottom: 226px;
`;