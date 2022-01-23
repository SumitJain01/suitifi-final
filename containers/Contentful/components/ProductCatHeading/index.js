import React from 'react';
import styled from 'styled-components';

const ProductCatHeading = ({ title, heading }) => {
    return (
        <Wrapper>
            {heading && <Heading>{heading}</Heading>}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin-top: 2.6rem;
    padding: 1rem 0;
    background-size: cover;
    background-image: url('https://mamaearthp.imgix.net/wysiwyg/sky_strip_desktop2x.png?auto=format');
    background-size: 100%;
    background-repeat:no-repeat;
    /* height:100px; */
    /* background-image: url('static/mamaearth/bg_desk.svg'); */
    text-align: center;

    @media only screen and (max-width : 767px){
        border-radius:10px 10px 0px 0px;
        background-image:url('https://mamaearthp.imgix.net/wysiwyg/sky_strip_mobile2x.png?auto=formatt');
        background-repeat:no-repeat;

    }
    @media only screen and (min-width: 1024px) {
        border-radius: 10px 10px 0px 0px;
        background-image: url('https://mamaearthp.imgix.net/wysiwyg/sky_strip_desktop2x.png?auto=format');
        background-repeat: no-repeat; 
    }
    

`;

const Heading = styled.div`
    padding-top: 0.15em;
    background-size: cover;
    background-image: url('https://mamaearthp.imgix.net/wysiwyg/red_tag_desktop2x.png?auto=format');
    display: inline-block;
    width: 224.9px;
    height: 46.71px;

    color: #FFFFFF;
    font-family: Roboto, sans-serif;
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 0.25px;

    /* @media only screen and (min-width: 768px) {
        padding-top: 0.25em;
    } */
    @media only screen and (max-width: 768px) {
        background-image: url('https://mamaearthp.imgix.net/wysiwyg/red_tag_desktop2x.png?auto=format');
        background-repeat: no-repeat;
        
    }
    @media only screen and (max-width : 360px){
        background-image:url('https://mamaearthp.imgix.net/wysiwyg/red_tag_mobile2x.png?auto=format');
        /* width: 344px; */
        background-repeat: no-repeat;
        width: 63%;
        height: 38px;

      /* background-size: 360px;  */
    }
`;

export default ProductCatHeading;
