import React from "react";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./slideEx.css";
import {ourServices, slideImages} from "../data";
import styled from "styled-components";
import {Container} from "@mui/material";

SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

const SwipeContiner = styled.div`
  width: 100px;
  height: 100px;
  background-color: #FFFFFF;
  border: 2px solid black;
`

const SwipeWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`


const SwipeImageContainer = styled.div`
  width: 50px;
  height: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

const SwipeImage = styled.img`
  width: 100%;
  height: 100%;
  direction: rtl;
  right: 0;
  top: 0;
`


const SwipeTextContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  direction: rtl;
  color: black;
`


const SwipeTitle = styled.h3`
  width: 100%;
  height: 25px;
  font-size:  18px;
`


const SwipeDesc = styled.div`
  width: 100%;
  height: 35px;
  padding: 20px;
`




const OurServices = () => {
    return (
        <div className="main-swiper">
            <Swiper
                effect={"coverflow"}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                grabCursor={true}
                style={{ height: '300px', width: '100%' }}
                // spaceBetween={10}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{

                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                className="mySwiper"
            >
                {/* using array */}
                {ourServices.map((swipeItem, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <Container>
                                <SwipeWrapper>
                                    <SwipeImageContainer>
                                        <SwipeImage src={swipeItem.img} alt={swipeItem.desc} />
                                    </SwipeImageContainer>
                                    <SwipeTextContainer>
                                        <SwipeTitle>
                                            {
                                                swipeItem.title
                                            }
                                        </SwipeTitle>
                                        <SwipeDesc>
                                            {
                                                swipeItem.desc
                                            }
                                        </SwipeDesc>
                                    </SwipeTextContainer>
                                </SwipeWrapper>
                            </Container>
                        </SwiperSlide>
                    );
                })}

            </Swiper>
        </div>
    );
};

export default OurServices;