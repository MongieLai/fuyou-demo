import React, { useEffect } from 'react'
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

const getDoctor = () => {
    return new Promise((resolve, reject) => {
        // if (request) {
        //     console.log(request)
        //     resolve(response)
        // } else {
        //     this.message(() => {
        //         reject(this.response)
        //         const { title, info, img } = this.response
        //         this.response.map((item, index) => {
        //         })
        //     })
        // }
    })
}

export default function Header(props) {
    return (
        <div>
            <Row justify={'center'}>
                <Col span={16} >
                    <Carousel autoplay effect="fade" >
                        {
                            carouselImgList.map((item, index) => {
                                return (
                                    <CarouselImg key={index} url={item}></CarouselImg>
                                )
                            })
                        }
                    </Carousel>
                </Col>
            </Row>
            <Shortcut></Shortcut>
            <Row justify={'center'}>
                <Col span={9}>
                    <NewsDynamic />
                </Col>
                <Col span={6} offset={1}>
                    <InternetConsulting />
                </Col>
            </Row>
            <Row justify={'center'}>
                <Col span={16}>
                    <ExpertRecommend />
                </Col>
            </Row>
            <Row justify={'center'}>
                <Col span={9}>
                    <ClassRecommend />
                </Col>
                <Col span={6} offset={1}>
                    <OrganizationNews />
                </Col>
            </Row>
            <div style={{ "height": `50px`, background: '#68c1ac' }}>

            </div>
            <img src='/LOGO-2.png'></img>
        </div>

    )
}