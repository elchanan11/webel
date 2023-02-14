import styled from "styled-components";
import {leptop, mobile} from "../responsive";
import introImage from '../images/intro3.png'
import {useEffect, useRef} from "react";
import {init} from "ityped";


const Container = styled.div `
  width: 100%;
  height: 100%;
  background-color: #f4f9fb;
  ${leptop({padding: "100px"})}
  ${mobile({padding: "30px"})}
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  direction: rtl;
  justify-content: space-between;
`

const Text = styled.h1`
  ${leptop({fontSize:"35px"})}
`


const ImageContiner = styled.div`
 display: flex;
`

const Image = styled.img`
  width: 400px;
  height: 70%;
  ${mobile({width:"100%"})}
`

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["פיתוח אתרים", "UX/UI", "שלמות"],
    });
  }, []);
  return(
      <Container>
        <Wrapper>
          <h1 style={{fontSize:"50px"}}>
            <span ref={textRef}></span>
          </h1>
          <ImageContiner>
            <Image src={introImage}/>
          </ImageContiner>

        </Wrapper>
      </Container>
  )
}

export default Intro