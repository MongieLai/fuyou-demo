import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import CarouselImg from '../components/CarouselImg'
import Shortcut from '../components/Home/Shortcut'
import NewsDynamic from '../components/Home/NewsDynamic'
import InternetConsulting from '../components/Home/InternetConsulting'
import ExpertRecommend from '../components/Home/ExpertRecommend'
import ClassRecommend from '../components/Home/ClassRecommend'
import OrganizationNews from '../components/Home/OrganizationNews'
import request from '../api/home'
const { getNewsList } = request //获取新闻动态列表的接口,容易挂...
// import Mock from 'mockjs'
const carouselImgList = [
    '/carousel1.jfif',
    '/carousel2.jfif',
    '/carousel3.jfif'
]

class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {/* <Carousel autoplay effect="fade" >
                    {
                        carouselImgList.map((item, index) => {
                            return (
                                <CarouselImg key={index} url={item}></CarouselImg>
                            )
                        })
                    }
                </Carousel> */}
                {/* <Shortcut />
                <NewsDynamic />

                <InternetConsulting />
                <ExpertRecommend />
                <ClassRecommend />

                <OrganizationNews /> */}

            </div >
        )
    }

}

export default Header