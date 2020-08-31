import React, { Component } from 'react'
import { Carousel } from "react-bootstrap";

export class MyCarousel extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/carousel1.jfif"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/carousel3.jfif"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/carousel2.jfif"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default MyCarousel
