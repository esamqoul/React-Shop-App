import React from "react";

import { WideSpan, Span2, GreenCta, CTA } from "./Style";

import Bag from "./images/bag.jpg";

function WideSpanBag() {
  return (
    <WideSpan>
      <span className="side-1">
        <GreenCta href="#">EXCLUSIVE PRODUCT</GreenCta>
        <h4>Raddo - travel bag. Suitablefor men and women.</h4>
        <p>
          Worldwide delivery $15. Warranty, two months from the date of
          purchase. 35 kg capacity.
        </p>
        <CTA>
          <i className="fas fa-shopping-cart"></i> ADD TO CART
        </CTA>
      </span>
      <Span2>
        <i className="far fa-star"></i>
        <img src={Bag} alt="Bag" />
        <i className="far fa-heart"></i>
      </Span2>
    </WideSpan>
  );
}

export default WideSpanBag;
