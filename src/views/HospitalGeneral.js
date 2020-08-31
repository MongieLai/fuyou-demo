import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import CarouselImg from '../components/CarouselImg'
import Shortcut from '../components/Home/Shortcut'
export default function Header(props) {
    return (
        <div className={"col-xs-12 col-sm-5"}>
           <img src='/insideBanner.png'></img>
        </div>

    )
}