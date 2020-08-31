import React from 'react'
import styled from 'styled-components'
const Img = styled.img`
        height:300px;
        width:100%;
`
export default function CarouseLImg(props) {

    return (
        <Img src={props.url}></Img>
    )
}