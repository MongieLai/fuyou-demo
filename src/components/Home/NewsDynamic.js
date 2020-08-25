import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd';
import { CaretRightOutlined, PushpinTwoTone } from '@ant-design/icons';

const NewsTitle = styled.div`
    background:url('/bd-1.png');
    background-size:100% 100%;
    color:white;
    font-weight: bold;
    padding:10px 5px 10px 20px;    
    display:flex;
    justify-content: space-between;
    align-items:center;
    span:nth-child(2){
        color:#727171;
        cursor:pointer;
    }        
`

const LiWrapper = styled.ul`
    margin-top:15px;
    a{
        text-decoration:none;
        color:#333;
        li{
            border-bottom:1px #c9caca dashed;
            display:flex;
            justify-content: space-between;        
            padding:5px;
            font-size:14px;
            svg{
                margin-right:3px;
            }
        }
    }
    a:hover{
        color:#56aab7;
    }
`

export default function NewsDynamic(props) {
    // const newsList = [{ "U_ID": "6f01b54be3b811ea9603005056bdf378", "C_TITLE": "保健康 惠民生 树标杆 ——我院举办2020年“中国医师节”庆祝暨表彰活动", "D_APPLYTIME": "2020-08-21" }, { "U_ID": "fe863ad8d1f911ea8f25005056bdf378", "C_TITLE": "珠海市妇女儿童医院（珠海市妇幼保健院）7月29日正式启用", "D_APPLYTIME": "2020-07-30" }, { "U_ID": "4622e4f6cd6811ea8f25005056bdf378", "C_TITLE": "珠海市妇幼保健院南北院区顺利完成第一例危重病人转运", "D_APPLYTIME": "2020-07-24" }, { "U_ID": "e0021c65c02b11ea8f25005056bdf378", "C_TITLE": "市卫生健康局局长徐超龙赴怒江慰问帮扶医生", "D_APPLYTIME": "2020-07-07" }, { "U_ID": "5f691b15b5af11ea8f25005056bdf378", "C_TITLE": "万事俱备 联调联试——市妇女儿童医院新院区即将运营", "D_APPLYTIME": "2020-06-24" }, { "U_ID": "2f27d9b2b55411ea8f25005056bdf378", "C_TITLE": "组建专科联盟，服务妇幼健康 ——我院与市第五人民医院举行专科联盟签约暨“关爱千日，妇幼名医进基层”联合义诊活动", "D_APPLYTIME": "2020-06-23" }, { "U_ID": "9e693af0aa0111ea8f25005056bdf378", "C_TITLE": "珠澳一家亲 携手助复学", "D_APPLYTIME": "2020-06-09" }]
    const newsList = [{ "U_ID": "6f01b54be3b811ea9603005056bdf378", "C_TITLE": "保健康 惠民生 树标杆 ——我院举办2020年“中国医师节”庆祝暨表彰活动", "D_APPLYTIME": "2020-08-21" }, { "U_ID": "fe863ad8d1f911ea8f25005056bdf378", "C_TITLE": "珠海市妇女儿童医院（珠海市妇幼保健院）7月29日正式启用", "D_APPLYTIME": "2020-07-30" }, { "U_ID": "4622e4f6cd6811ea8f25005056bdf378", "C_TITLE": "珠海市妇幼保健院南北院区顺利完成第一例危重病人转运", "D_APPLYTIME": "2020-07-24" }, { "U_ID": "e0021c65c02b11ea8f25005056bdf378", "C_TITLE": "市卫生健康局局长徐超龙赴怒江慰问帮扶医生", "D_APPLYTIME": "2020-07-07" }, { "U_ID": "5f691b15b5af11ea8f25005056bdf378", "C_TITLE": "万事俱备 联调联试——市妇女儿童医院新院区即将运营", "D_APPLYTIME": "2020-06-24" }, { "U_ID": "2f27d9b2b55411ea8f25005056bdf378", "C_TITLE": "组建专科联盟，服务妇幼健康 ——我院与市第五人民医院举行专科联盟", "D_APPLYTIME": "2020-06-23" }, { "U_ID": "9e693af0aa0111ea8f25005056bdf378", "C_TITLE": "珠澳一家亲 携手助复学", "D_APPLYTIME": "2020-06-09" }]

    return (
        <Row>
            <Col span={24}>
                <NewsTitle>
                    <span>新闻动态</span>
                    <span>
                        <CaretRightOutlined />
                            更多
                        </span>
                </NewsTitle>

                <LiWrapper>
                    {
                        newsList.map((newsItem, index) => {
                            return (
                                <a href='#/iii' key={index}><li>
                                    <span>
                                        <PushpinTwoTone twoToneColor="#56aab7" />
                                        {newsItem.C_TITLE}</span>
                                    <span>{newsItem.D_APPLYTIME}</span>
                                </li></a>
                            )
                        })
                    }
                </LiWrapper>
            </Col>
        </Row>
    )
}