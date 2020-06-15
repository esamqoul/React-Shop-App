import React from "react";

import { WideSpan2, CTA, PerpilCta } from "./Style";

import Dress from "./images/dress.jpg";
import TrackSuits from "./images/tracksuits.jpg";
import ShoesSport from "./images/shoes-sport.jpg";

function WideSpanItems() {
  return (
    <WideSpan2>
      <PerpilCta>LIMITED QUANTITY</PerpilCta>
      <PerpilCta>LIMITED QUANTITY</PerpilCta>
      <PerpilCta>LIMITED QUANTITY</PerpilCta>
      <img src={Dress} alt="Dress" />
      <img src={TrackSuits} alt="TrackSuits" />
      <img src={ShoesSport} alt="ShoesSport" />
      <p>$320</p>
      <p>$320</p>
      <p>$320</p>
    </WideSpan2>
  );
}

export default WideSpanItems;
