import React from "react";
import { Carousel } from "react-responsive-carousel";
import image from '../images/200x150.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default () => (
    <Carousel
        showStatus={false}
        showThumbs={false} autoPlay>
        <div>
            <img alt="test" src={image} />

        </div>
        <div>
            <img alt="test" src={image} />

        </div>
        <div>
            <img alt="test" src={image} />

        </div>
        <div>
            <img alt="test" src={image} />

        </div>
        <div>
            <img alt="test" src={image} />

        </div>
        <div>
            <img alt="test" src={image} />

        </div>
        <div>
            <img alt="test" src={image} />

        </div>
        <div>
            <img alt="test" src={image} />

        </div>
        <div>
            <img alt="test" src={image} />

        </div>
        <div>
            <img alt="test" src={image} />

        </div>
        <div>
            <img alt="test" src={image} />

        </div>
        <div>
            <img alt="test" src={image} />

        </div>
        <div>
            <img alt="test" src={image} />

        </div>
        <div>
            <img alt="test" src={image} />

        </div>
    </Carousel>
);