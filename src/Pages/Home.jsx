import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import MySkills from "../components/MySkills";
import Intro from "../components/Intro";
import OurServices from "../components/OurServices";
const Container = styled.div `
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`

function Home() {
    return (
        <Container >
           <NavBar />
            <Intro />
            <OurServices />
            <MySkills />
        </Container>
    );
}

export default Home;
