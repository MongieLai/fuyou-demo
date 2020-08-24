import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd';

const ShortcutWrapper = styled.div`
    margin-top:20px;
    margin-bottom:20px;
    img{
        cursor:pointer; 
    }
`

export default function Shortcut(props) {
    let i = 8
    return (
        <ShortcutWrapper>
            <Row justify={'center'}>
                <Col xs={24} sm={18}>
                    <Row justify={'center'} gutter={40} style={{ paddingBottom: `10px` }}>
                        <Col span={4}>
                            <img src={'/quick-1.png'}></img>
                        </Col>
                        <Col span={4}>
                            <img src={'/quick-2.png'}></img>
                        </Col>
                        <Col span={4}>
                            <img src={'/quick-3.png'}></img>
                        </Col>
                        <Col span={4}>
                            <img src={'/quick-4.png'}></img>
                        </Col>

                    </Row>
                    <Row justify={'center'} gutter={40}>
                        <Col span={4}>
                            <img src={'/quick-5.png'}></img>
                        </Col>
                        <Col span={4}>
                            <img src={'/quick-6.png'}></img>
                        </Col>
                        <Col span={4}>
                            <img src={'/quick-7.png'}></img>
                        </Col>
                        <Col span={4}>
                            <img src={'/quick-8.png'}></img>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </ShortcutWrapper>
    )
}