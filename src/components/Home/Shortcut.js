import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd';

const ShortcutWrapper = styled.div`
    padding:8px 80px;
    /* margin-top:20px;
    margin-bottom:20px;
    display:flex;
    flex-wrap:wrap;
    div{
        &:first-child{
            margin-bottom:10px;
        }
        > img{
            cursor:pointer; 
            width:22%;
            &:not(:last-child){
                margin-right:4%;
            }
        }
    } */
    img{
            cursor:pointer; 
            padding:8px 32px;
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
        <ShortcutWrapper className={'ShortcutWrapper'}>
            <div>
                {
                    shortcutObj.firstLine.map((item, index) => {
                        return (
                            <img className="col-xs-6 col-sm-3" src={item}></img>
                        )
                    })
                }
                {
                    shortcutObj.secondLine.map((item, index) => {
                        return (
                            <img className="col-xs-6 col-sm-3" src={item}></img>
                        )
                    })
                }
            </div>


        </ShortcutWrapper>
    )
}