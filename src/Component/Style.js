import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 30px auto;
  box-sizing: border-box;
`;

export const Heroafshion = styled.div`
  margin-bottom: 30px;
  background-color: white;
  display: grid;
  align-items: center;
  grid-template-areas: "text fashion";
  &img {
    width: 100 %;
  }
  @media (max-width: 414px) {
    grid-template-areas:
      "fashion"
      "text";
  }
`;
export const HeroafshionText = styled.div`
  color: #464646;
  padding: 30px;
`;
export const CTA = styled.button`
  -webkit-box-shadow: inset 0px 1px 0px 0px #ffffff;
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(5 %, #ffffff), to(#f6f6f6));
  background: linear-gradient(to bottom, #ffffff 5 %, #f6f6f6 100 %);
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  cursor: pointer;
  color: #666666;
  font-size: 11px;
  padding: 6px 24px;
  text-decoration: none;
  height: 30px;
  line-height: 15px;
  margin: 1em;

    @media(max-width: 414px) {
      padding: 3px 13px;
      margin: .1em;
      height 40px;
    }

    &:hover {
    background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #f6f6f6), to(#ffffff));
    background: linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
    background-color: #f6f6f6;}
`;
export const GreenCta = styled.button`
  margin-bottom: 0.6em;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 11px;
  padding: 5px 32px;
  text-decoration: none;
  height: auto;
  text-align: center;
  background-color: #99cc33;
  :hover {
    background-color: #b7ff26;
    color: black;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;
export const PerpilCta = styled.button`
  background-color: #cc33cc;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 11px;
  padding: 5px 20px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #cc33cc;
  height: auto;
  text-align: center;
  display: inline-block;
  :hover {
    background-color: #fa40fa;
    color: black;
  }
  :active {
    top: 1px;
    position: relative;
  }
`;
export const FashionUl = styled.ul`
  display: -ms-grid;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;

export const Fashionbg = styled.li`
  grid-row: 1 /-1;
  grid-column: 1 / -1;
  z-index: 0;
  list-style: none;

  &img {
    width: 100%;
  }
`;
export const Img = styled.img`
  width: 100%;
`;
export const Fashionimg1 = styled.li`
  grid-row: 1 / span 2;
  grid-column: 1;
  z-index: 1;
  align-self: end;
  padding-bottom: 20px;
  list-style: none;
`;

export const Fashionimg2 = styled.li`
  grid-row: 1 / span 2;
  grid-column: 2;
  z-index: 1;
  align-self: end;
  padding-bottom: 20px;
  list-style: none;
`;

export const Fashionimg3 = styled.li`
  grid-row: 1 / span 2;
  grid-column: 3;
  z-index: 1;
  align-self: end;
  padding-bottom: 20px;
  list-style: none;
`;
export const ROW = styled.div`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(250px, 1fr)) [auto-fit];
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 30px;

  @media (max-width: 414px) {
    grid-template-columns: 1fr;
    grid-gap: 30px 0;
  }
`;
export const Box = styled.div`
  border-radius: 3px;
  background-color: #ffffff;
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.06);

  @media (max-width: 414px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column: span 2;
    justify-items: center;
  }
`;

export const TallSpan = styled(Box)`
  grid-row: span 2;
  padding: 20px;
  grid-gap: 20px;
  display: -ms-grid;
  display: grid;

  @media (max-width: 414px) {
    grid-column: span 2;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const TopSpan = styled.div`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (1fr) [3];
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`;

export const WideSpan = styled.div`
  grid-column: span 2;
  padding: 20px;
  grid-gap: 30px;
  border-radius: 3px;
  background-color: #ffffff;
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.06);
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (1fr) [2];
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 414px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column: span 2;
  }
`;
export const WideSpan2 = styled.div`
  display: grid;
  grid-column: span 2;
  padding: 20px;
  grid-gap: 30px;
  border-radius: 3px;
  background-color: #ffffff;
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.06);
  display: -ms-grid;
  -ms-grid-columns: (1fr) [3];
  grid-template-columns: repeat(3, 1fr);
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-items: center;
  grid-gap: 20px;

  @media (max-width: 414px) {
    grid-gap: 5px !important;
    padding: 10px;
  }
`;

export const Span2 = styled.span`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (1fr) [3];
  grid-template-columns: repeat(3, 1fr);
`;
export const Padding = styled.div`
  padding: 20px;
`;

export const Elements = styled.div`
  border-radius: 3px;
  background-color: #ffffff;
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.06);
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: inherit;
  grid-template-columns: inherit;
  justify-items: center;
`;
export const ElementsImage = styled.img`
    grid-row: 1 /-1;
    grid-column: 1 / -1;
    z-index: 0
    -o-object-fit: cover;
    object-fit: cover;
    width: 100%;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
  `;

export const ElementsSpan = styled.span`
  display: grid;
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  grid-row: 1 / span 2;
  -ms-grid-column: 1;
  grid-column: 1;
  z-index: 1;
  justify-items: center;
  display: -ms-grid;
  padding: 20px 20px 0px 20px;
`;
export const ElementsH1 = styled.h1`
  color: white;
  line-height: 1.2;
  font-weight: 700;
`;
export const ElementsH3 = styled.h3`
  color: white;
  line-height: 1.2;
`;

export const ImageData = styled.img`
  object-fit: cover;
  width: 100%;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  grid-row: 1 /-1;
  grid-column: 1 / -1;
  z-index: 0;
`;

export const Navigation = styled.header`
  border-bottom: 10px solid #6e6f82;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px 0;
  height: 100px;
  background: #f8f8f8;

  .logo button {
    padding-top: 33px;
    display: flex;
    flex-direction: column;
    clear: both;
    padding-bottom: 30px;
    text-decoration: none;
    text-align: inherit;

    p {
      display: block;
    }
    em {
      font-size: 0.5em;
      float: left;
      display: block;
      img {
        display: inline-block;
        margin-top: 5px;
        width: 15px;
        float: left;
      }
      .letterhead {
        display: inline-block;
        line-height: 260%;
        float: left;
      }
    }
  }
  .gray {
    color: #ccc;
  }
  button {
    opacity: 0.55;
    transition: all 0.6s;
    color: #222;
    font-size: 1em;
  }
  button:hover {
    opacity: 1;
  }
  .fa-bars {
    display: none;
    color: #222;
    font-size: 2rem;
  }
  nav {
    ul {
      display: flex;
      justify-content: space-between;
    }
    li {
      margin: 0 15px;
      justify-content: space-between;
      font-size: 1em;
    }
    button {
      font-size: 1em;
      text-decoration: none;
      .active {
        color: tomato;
      }
    }
    button.active {
      color: #222;
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 0px;
    .logo {
      padding-left: 15px;
      padding-top: 0px !important;
    }
  }
  @media only screen and (max-width: 600px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    .logo {
      width: 100%;
      display: block;
      padding-top: 20px;
      margin: 0px;
      margin-left: -5px;
      button {
        padding: 20px 0px;
      }
    }
    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;
