import React from "react";

import TopPostList from "./TopSection";

import { Heroafshion, Img, FashionUl, Fashionbg, Fashionimg1, Fashionimg2, Fashionimg3 } from "./Style"

import G from "./images/g.jpg";
import Image_1 from "./images/image_1.jpg";
import Image_2 from "./images/image_2.jpg";
import Image_3 from "./images/image_3.jpg";

function Top() {
    return (
        <Heroafshion>
            <TopPostList />
            <FashionUl>
                <Fashionbg><Img src={G} alt="img" /></Fashionbg>
                <Fashionimg1> <img src={Image_1} alt="img1" /></Fashionimg1>
                <Fashionimg2> <img src={Image_2} alt="img2" /></Fashionimg2>
                <Fashionimg3> <img src={Image_3} alt="img3" /></Fashionimg3>
            </FashionUl>
        </Heroafshion>

    )
};

export default Top;
