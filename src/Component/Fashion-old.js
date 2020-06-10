import React, { Component } from "react";
import axios from "axios";
import { CTA, Elements, ElementsImage, ElementsSpan, ElementsH1, ElementsH3 } from "./Style"
//import PostList from "./Images"

import Dior from "./images/dior.jpg";
import Vella from "./images/vella.jpg";
import Andy from "./images/andy.jpg";
import Omark from "./images/omark.jpg";


class Fashion extends Component {
    works = {
        r: []
    }
    componentDidMount() {
        axios.get("js/data.json")
            .then(res => {
                console.log(res.data.fation)
                //    this.setState({ works: res.data.fation })
            })
    }
    render() {
        //    const { works } = this.State;

        //  const worksList = works.map((FashionItems) => {
        //    return (
        //      <h1>{FashionItems.title}</h1>
        //)
        // })
        return (
            <>
                <Elements>
                    <ElementsImage src={Dior} alt="Dior" />
                    <ElementsSpan>
                        <ElementsH1>Dior</ElementsH1>
                        <ElementsH3>Accessories from the world of the brand</ElementsH3>
                        <CTA>Shop Now</CTA>
                    </ElementsSpan>
                </Elements>
                <Elements>
                    <ElementsImage src={Vella} alt="Vella" />
                    <ElementsSpan className="full__elements">
                        <ElementsH1>Dior</ElementsH1>
                        <ElementsH3>Accessories from the world of the brand</ElementsH3>
                        <CTA>Shop Now</CTA>
                    </ElementsSpan>
                </Elements>
                <Elements>
                    <ElementsImage src={Andy} alt="Andy" />
                    <ElementsSpan className="full__elements">
                        <ElementsH1>Dior</ElementsH1>
                        <ElementsH3>Accessories from the world of the brand</ElementsH3>
                        <CTA>Shop Now</CTA>
                    </ElementsSpan>
                </Elements>
                <Elements>
                    <ElementsImage src={Omark} alt="Omark" />
                    <ElementsSpan className="full__elements">
                        <ElementsH1>Dior</ElementsH1>
                        <ElementsH3>Accessories from the world of the brand</ElementsH3>
                        <CTA>Shop Now</CTA>
                    </ElementsSpan>
                </Elements>

            </>
        )
    }
};

export default Fashion;