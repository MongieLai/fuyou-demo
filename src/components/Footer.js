import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd';

const HeaderWrapper = styled.div`
    border:1px solid red;
    margin:0 auto;
`

export default function Header(props) {
    return (
        <HeaderWrapper>
            <img></img>
            <Row>
                <Col>col</Col>
            </Row>
        </HeaderWrapper>
    )
}