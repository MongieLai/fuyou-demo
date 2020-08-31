import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd';

const FooterWrapper = styled.div`
    margin:0 auto;
    background:#37b381;
    padding-bottom:20px;
`

const TopPlaceholder = styled.div`
    height:50px;
    background:#68c1ac;
`

const ForReference = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    >span{
        margin-left:5px;
        color:white;
        cursor:pointer;
        font-size:12px;
    }
`

const FooterNavWrapper = styled.div`
   display:flex;
   color:white;
   margin-top:50px;
   justify-content:flex-end;
   border-right:2px solid white;
   ul{
       margin-right:5px;
   }
   h3{
        color:white;
       font-size:14px;
   }
   li{
       font-size:12px;
       cursor:pointer;
   }
`

const ContactWrpaer = styled.div`
   margin-top:50px;
   padding-left:5px;
`

const footerNavDetail = [
    {
        title: '医院概况',
        navItem: [
            { name: '医院简介', path: '' },
            { name: '医院领导', path: '' },
            { name: '医院架构', path: '' },
            { name: '医院荣誉', path: '' },
            { name: '院训宗旨', path: '' }
        ]
    },
    {
        title: '科室专家',
        navItem: [
            { name: '科室介绍', path: '' },
            { name: '专家介绍', path: '' },
            { name: '名医风采', path: '' }
        ]
    },
    {
        title: '名医风采',
        navItem: [
            { name: '新闻中心', path: '' },
            { name: '医院动态', path: '' },
            { name: '通知公告', path: '' }
        ]
    },
    {
        title: '护理园地',
        navItem: [
            { name: '护士风采', path: '' },
            { name: '护理培训', path: '' }
        ]
    },
    {
        title: '便民服务',
        navItem: [
            { name: '门诊就诊', path: '' },
            { name: '急诊就诊', path: '' },
            { name: '急诊指南', path: '' },
            { name: '住院指南', path: '' },
            { name: '楼层分布', path: '' },
            { name: '体检服务', path: '' },
            '乘车服务'
        ]
    },
    {
        title: '健康教育',
        navItem: [
            { name: '讲座通知', path: '' },
            { name: '健康知识', path: '' }
        ]
    },
    {
        title: '科研教学',
        navItem: [
            { name: '科研动态', path: '' },
            { name: '学术成果', path: '' },
            {
                name: '学习班', path: ''
            }]
    },
    {
        title: '科研教学',
        navItem: [
            { name: '科研动态', path: '' },
            { name: '健康知识', path: '' },
        ]
    },
    {
        title: '党群建设',
        navItem: [
            { name: '党建天地', path: '' },
            { name: '工会天地', path: '' },
            { name: '团务天地', path: '' },
        ]
    }
]

export default function Header(props) {
    return (
        <FooterWrapper>
            <TopPlaceholder />
            <Row>
                <Col span={12}>
                    <FooterNavWrapper>
                        {
                            footerNavDetail.map((item, index) => {
                                return (
                                    <ul key={index}>
                                        <h3>{item.title}</h3>
                                        {item.navItem.map((item, index) => {
                                            return (<li key={index}>{item.name}</li>)
                                        })}
                                    </ul>
                                )
                            })
                        }
                    </FooterNavWrapper>
                </Col>
                <Col span={12}>
                    <ContactWrpaer>
                        <Row>
                            <Col span={8}>
                                <img src='/LOGO-2.png'></img>
                            </Col>
                        </Row>
                    </ContactWrpaer>
                </Col>
            </Row>
            <ForReference>
                <img src='/guangdong.png'></img>
                <span>粤公网安备 44040202001103号</span>
            </ForReference>
        </FooterWrapper >
    )
}