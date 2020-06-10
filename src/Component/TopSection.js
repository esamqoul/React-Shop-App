import React, { Component } from 'react';
import PostData from "../JsonData/TopSection.json";

import { CTA, HeroafshionText, } from "./Style"

class TopPostList extends Component {
    render() {
        return (
            <div className="boxData" >
                {PostData.map((top, index) => {
                    return <div key={top.id}>
                        <HeroafshionText>
                            <h1>{top.title}</h1>
                            <p>{top.body}</p>
                            <>
                                <CTA>{top.ctaReadMore} <i className="far fa-comment" /></CTA>
                                <CTA>{top.ctaWatchPresentation}, <i className="far fa-eye" /></CTA>
                            </>
                        </HeroafshionText>
                    </div>
                })}
            </div>
        )
    }
}

export default TopPostList