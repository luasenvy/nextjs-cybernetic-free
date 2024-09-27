import styled from "@emotion/styled";
import { Swiper } from "swiper/react";
import "swiper/css";

export const SwiperStyled = styled(Swiper)<{
  slidesPerView: any;
}>`
  overflow: hidden;
  width: 100%;
`;
