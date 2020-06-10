import React from "react";

import { CTA, TallSpan, TopSpan } from "./Style"

import Shoes from "./images/shoes.jpg";

function TallSpanShoes() {
    return (
        <TallSpan>
            <TopSpan>
                <i className="fas fa-align-left"></i>
                <img src={Shoes} alt="Shoes" />
                <i className="far fa-arrow-alt-circle-right"></i>
            </TopSpan>
            <span>
                <CTA href="#" className="cta__green">EXCLUSIVE PRODUCT</CTA>
                <h3>Jon Darreto</h3>
                <h4>Designer, Paris</h4>
                <p>This new collection from the talented designer Louise Darreto</p>
                <CTA className="cta" test="">Shop Now</CTA>
            </span>
        </TallSpan>
    )
};

export default TallSpanShoes;