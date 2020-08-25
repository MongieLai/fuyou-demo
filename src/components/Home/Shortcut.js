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

const shortcutObj = {
    firstLine: [
        '/quick-1.png',
        '/quick-2.png',
        '/quick-3.png',
        '/quick-4.png'
    ],
    secondLine: [
        '/quick-5.png',
        '/quick-6.png',
        '/quick-7.png',
        '/quick-8.png'
    ]
}

export default function Shortcut(props) {
    return (
        <ShortcutWrapper>
            <Row justify={'center'}>
                <Col xs={24} sm={18}>
                    <Row justify={'center'} gutter={40} style={{ paddingBottom: `10px` }}>
                        {
                            shortcutObj.firstLine.map((item, index) => {
                                return (
                                    <Col span={4} key={index}>
                                        <img src={item}></img>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Row justify={'center'} gutter={40}>
                        {
                            shortcutObj.secondLine.map((item, index) => {
                                return (
                                    <Col span={4} key={index}>
                                        <img src={item}></img>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Col>
            </Row>
        </ShortcutWrapper>
    )
}