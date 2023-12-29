import { width } from "@mui/system";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarouselData } from "./MainCarouselData";

const items = MainCarouselData.map((item) => (
  <img
    src={item.image}
    style={{ width: "100vw", height: "70vh" }}
    className="cursor-pointer"
  />
));

const MainCarousel = () => (
  <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite
  />
);
export default MainCarousel;
