import React from "react";

import Top from "./Top";
import TallSpanShoes from "./TallSpan";
import WideSpanBag from "./WildSpan";
import WideSpanItems from "./WildSpan3";
import FashionItems from "./Fashion";

import { Wrapper, ROW, Box, TopSpan, Padding } from "./Style"

import BabySuit from "./images/baby-suit.jpg";
import KnittedToys from "./images/knitted-toys.jpg";

function Hero() {
  return (
    <Wrapper>
      <Top />
      <ROW>
        <TallSpanShoes />
        <WideSpanBag />
        <Box>
          <Padding>
            <TopSpan>
              <i className="far fa-heart"></i>
              <img src={BabySuit} alt="baby-suit" />
              <i className="fas fa-bars"></i>
            </TopSpan>
            <h3>Kaly - baby suit</h3>
            <p>Clothes for young children</p>
            <p className="light">$1355 - $1255</p>
          </Padding>
        </Box>
        <Box>
          <Padding>
            <TopSpan>
              <i className="far fa-heart"></i>
              <img src={KnittedToys} alt="KnittedToys" />
              <i className="fab fa-facebook-f"></i>
            </TopSpan>
            <h4>Bany - set of knitted toys</h4>
            <p>A large number of characters</p>
            <p className="light">$1500</p>
          </Padding>
        </Box>
        <WideSpanItems />
        <FashionItems />
      </ROW>
    </Wrapper >
  )
};

export default Hero;
