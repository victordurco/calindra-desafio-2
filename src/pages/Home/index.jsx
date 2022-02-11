import styled from 'styled-components';

import Header from "../../components/Header";

export default function Home() {
   return (
    <Container>
        <Header />
    </Container>
   ); 
}

const Container = styled.div`
    width: 100%;
`;