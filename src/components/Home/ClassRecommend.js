import React, { useState } from 'react'
import { Tabs } from 'antd';
import styled from 'styled-components'
import { Row, Col } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
const ExpertRecommendWrapper = styled.div`
    margin-top:20px;
`
const { TabPane } = Tabs;

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

const SubjectClassifyWrapper = styled.div`
    margin-top:20px;
    margin-bottom:20px;
`

const SubjectItem = styled.div`
    display:inline-block;
    width:100%;
    text-align:center;
    padding:5px 0;
    background:#c1e3e2;
    border:2px solid #8ec6c8;
    &:hover{
        background:#ffc568;
        color:white;
        cursor:pointer;
    }
`


const subjectClassifyObj = [
    {
        text: '健康管理科',
        path: '/'
    },
    {
        text: '儿童心理科',
        path: '/'
    },
    {
        text: '儿三科',
        path: '/'
    },
    {
        text: '儿童保健科',
        path: '/'
    },
    {
        text: '妇女保健科',
        path: '/'
    },
    {
        text: '其他',
        path: '/'
    }
]

const doctorList =
{
    name: '谢栩',
    C_DUTI_NAME: "副主任医师",
    C_DEPARTMENT_NAME: "健康管理科",
    C_ADD_NAME: "宣教科",
    C_EXPERTINTO: "健康管理科主任，健康管理师，珠海市医学会健康管理学分会副主任委员、秘书长，广东省医院协会慢性病管理专业委员会委员。1992年7月1日毕业于汕头大学医学院临床医学专业，擅长个人及团体健康体检规划及健康管理。",
    img: '/doctor.jpg'
}

const classNameMap = [
    { className: '儿童心理科' },
    { className: '健康管理科' },
    { className: '儿三科' },
    { className: '儿童保健科' },
    { className: '妇女保健科' },
    { className: '生殖医学中心' },
    { className: '乳腺外科' },
    { className: '医学部' },
    { className: '妇科' },
    { className: '皮肤科' },
    { className: '新生儿科' },
    { className: '产前诊断中心' },
    { className: '中医科' },
    { className: '儿童康复科' },
    { className: '小儿外科' },
    { className: '急诊科' },
    { className: '眼科' },
    { className: '内科' },
    { className: '泌尿外科' },
    { className: '检验科' },
    { className: '骨科' },
    { className: '放射科' },
    { className: '耳鼻咽喉科' },
    { className: '儿一科' },
    { className: '儿科' },
    { className: '儿二科' },
    { className: '超声科' },
    { className: '产科' },
    { className: '普外科' }
]

export default function ClassRecommend(props) {
    // const newsList = [{ "U_ID": "6f01b54be3b811ea9603005056bdf378", "C_TITLE": "保健康 惠民生 树标杆 ——我院举办2020年“中国医师节”庆祝暨表彰活动", "D_APPLYTIME": "2020-08-21" }, { "U_ID": "fe863ad8d1f911ea8f25005056bdf378", "C_TITLE": "珠海市妇女儿童医院（珠海市妇幼保健院）7月29日正式启用", "D_APPLYTIME": "2020-07-30" }, { "U_ID": "4622e4f6cd6811ea8f25005056bdf378", "C_TITLE": "珠海市妇幼保健院南北院区顺利完成第一例危重病人转运", "D_APPLYTIME": "2020-07-24" }, { "U_ID": "e0021c65c02b11ea8f25005056bdf378", "C_TITLE": "市卫生健康局局长徐超龙赴怒江慰问帮扶医生", "D_APPLYTIME": "2020-07-07" }, { "U_ID": "5f691b15b5af11ea8f25005056bdf378", "C_TITLE": "万事俱备 联调联试——市妇女儿童医院新院区即将运营", "D_APPLYTIME": "2020-06-24" }, { "U_ID": "2f27d9b2b55411ea8f25005056bdf378", "C_TITLE": "组建专科联盟，服务妇幼健康 ——我院与市第五人民医院举行专科联盟签约暨“关爱千日，妇幼名医进基层”联合义诊活动", "D_APPLYTIME": "2020-06-23" }, { "U_ID": "9e693af0aa0111ea8f25005056bdf378", "C_TITLE": "珠澳一家亲 携手助复学", "D_APPLYTIME": "2020-06-09" }]
    const newsList = [{ "U_ID": "6f01b54be3b811ea9603005056bdf378", "C_TITLE": "保健康 惠民生 树标杆 ——我院举办2020年“中国医师节”庆祝暨表彰活动", "D_APPLYTIME": "2020-08-21" }, { "U_ID": "fe863ad8d1f911ea8f25005056bdf378", "C_TITLE": "珠海市妇女儿童医院（珠海市妇幼保健院）7月29日正式启用", "D_APPLYTIME": "2020-07-30" }, { "U_ID": "4622e4f6cd6811ea8f25005056bdf378", "C_TITLE": "珠海市妇幼保健院南北院区顺利完成第一例危重病人转运", "D_APPLYTIME": "2020-07-24" }, { "U_ID": "e0021c65c02b11ea8f25005056bdf378", "C_TITLE": "市卫生健康局局长徐超龙赴怒江慰问帮扶医生", "D_APPLYTIME": "2020-07-07" }, { "U_ID": "5f691b15b5af11ea8f25005056bdf378", "C_TITLE": "万事俱备 联调联试——市妇女儿童医院新院区即将运营", "D_APPLYTIME": "2020-06-24" }, { "U_ID": "2f27d9b2b55411ea8f25005056bdf378", "C_TITLE": "组建专科联盟，服务妇幼健康 ——我院与市第五人民医院举行专科联盟", "D_APPLYTIME": "2020-06-23" }, { "U_ID": "9e693af0aa0111ea8f25005056bdf378", "C_TITLE": "珠澳一家亲 携手助复学", "D_APPLYTIME": "2020-06-09" }]
    const [activeItem, setActiveItem] = useState('健康管理科')

    const subjectItemClick = (itemText) => {
        setActiveItem(itemText)
        // const setInfo = useEffect()
    }

    return (
        <ExpertRecommendWrapper>
            <Row>
                <Col span={24}>
                    <NewsTitle>
                        <span>科室介绍</span>
                        <span>
                            <CaretRightOutlined />
                            更多
                        </span>
                    </NewsTitle>
                </Col>
            </Row>
            <SubjectClassifyWrapper>
                <Row gutter={[16, 16]}>
                    {
                        classNameMap.map((item, index) => {
                            return (
                                <Col key={index} span={8}>
                                    <SubjectItem>
                                        {item.className}
                                    </SubjectItem>
                                </Col>)
                        })
                    }
                </Row>
            </SubjectClassifyWrapper>
        </ExpertRecommendWrapper>
    )
}