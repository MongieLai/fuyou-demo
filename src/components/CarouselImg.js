import React from 'react'
import styled from 'styled-components'


export default function CarouseLImg(props) {
    const ImgWrapper = styled.div`
        background-size: contain;
        img{
            height:300px;
            width:100%;
        }
    `
    return (
        <ImgWrapper>
            <img src={props.url}></img>
        </ImgWrapper>
    )
}