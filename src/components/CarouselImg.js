import React from 'react'
import styled from 'styled-components'


export default function CarouseLImg(props) {
    console.log(props)


    const imgUrl = props.url
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