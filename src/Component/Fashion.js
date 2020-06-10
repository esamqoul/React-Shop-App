import React, { Component } from 'react';
import PostData from "../JsonData/fashion.json";

import { CTA, Elements, ElementsSpan, ElementsH1, ElementsH3 } from "./Style"

class FashionItems extends Component {
    render() {
        return (
            <div className="boxData" >
                {PostData.map((postDetail, index) => {
                    return <Elements key={postDetail.id}>
                        <img className="imagedata" src={postDetail.image} alt="images " />
                        <ElementsSpan>
                            <ElementsH1>{postDetail.title}</ElementsH1>
                            <ElementsH3>{postDetail.body}</ElementsH3>
                            <CTA>{postDetail.cta}</CTA>
                        </ElementsSpan>

                    </Elements>
                })}
            </div>
        )
    }
}

export default FashionItems