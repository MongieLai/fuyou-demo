import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import CarouselImg from '../components/CarouselImg'
import Shortcut from '../components/Home/Shortcut'
export default function Header(props) {
    return (
        <div>
            <Row justify={'center'}>
                <Col span={18} >
                    <Carousel autoplay effect="fade" >
                        <CarouselImg url='/carousel1.jfif'></CarouselImg>
                        <CarouselImg url='/carousel2.jfif'></CarouselImg>
                        <CarouselImg url='/carousel3.jfif'></CarouselImg>
                    </Carousel>
                </Col>
            </Row>
            <Shortcut></Shortcut>
        </div>
        // <CarouselWrapper>
        //     <Carousel autoplay effect="fade">
        //         <CarouselImg url='/carousel1.jfif'></CarouselImg>
        //         <CarouselImg url='/carousel2.jfif'></CarouselImg>
        //         <CarouselImg url='/carousel3.jfif'></CarouselImg>
        //     </Carousel>
        // </CarouselWrapper>

    )
}