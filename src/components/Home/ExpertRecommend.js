import React, { useState } from 'react'
import { Tabs } from 'antd';
import styled from 'styled-components'
import { Row, Col } from 'antd';
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
`

const SubjectClassifyWrapper = styled.div`
    margin-top:20px;
    margin-bottom:20px;
`

const SubjectItem = styled.div`
    display:inline-block;
    width:100%;
    text-align:center;
    padding:20px 0;
    background:#f3f3f3;
    font-size:20px;
    &:hover{
        background-image: linear-gradient(to right, #56cfc7, #56aab7);
        color:white;
        cursor:pointer;
    }
    &.active{
        background-image: linear-gradient(to right, #56cfc7, #56aab7);
        color:white;
    }
`

const DoctorInfoWrapper = styled.div`
    border:1px solid red;
    height: 188px;
    overflow:hidden;
    > ul{
        min-width:1000%;
        height:100%;
        > li{
            background:#f5f5f5;
            height: 188px;
            display:inline-flex;
            img{
                width: 152px;
                height: 188px;
            }
            > div{
                display:flex;
                flex-direction:column;
                .doctor-name{
                    font-weight:bolder;
                }
                .intro{
                    flex-grow:1;
                }
            }
        }
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

//应该
const doctorList =
{
    name: '谢栩',
    C_DUTI_NAME: "副主任医师",
    C_DEPARTMENT_NAME: "健康管理科",
    C_ADD_NAME: "宣教科",
    C_EXPERTINTO: "健康管理科主任，健康管理师，珠海市医学会健康管理学分会副主任委员、秘书长，广东省医院协会慢性病管理专业委员会委员。1992年7月1日毕业于汕头大学医学院临床医学专业，擅长个人及团体健康体检规划及健康管理。",
    img: '/doctor.jpg'
}


export default function NewsDynamic(props) {
    // const newsList = [{ "U_ID": "6f01b54be3b811ea9603005056bdf378", "C_TITLE": "保健康 惠民生 树标杆 ——我院举办2020年“中国医师节”庆祝暨表彰活动", "D_APPLYTIME": "2020-08-21" }, { "U_ID": "fe863ad8d1f911ea8f25005056bdf378", "C_TITLE": "珠海市妇女儿童医院（珠海市妇幼保健院）7月29日正式启用", "D_APPLYTIME": "2020-07-30" }, { "U_ID": "4622e4f6cd6811ea8f25005056bdf378", "C_TITLE": "珠海市妇幼保健院南北院区顺利完成第一例危重病人转运", "D_APPLYTIME": "2020-07-24" }, { "U_ID": "e0021c65c02b11ea8f25005056bdf378", "C_TITLE": "市卫生健康局局长徐超龙赴怒江慰问帮扶医生", "D_APPLYTIME": "2020-07-07" }, { "U_ID": "5f691b15b5af11ea8f25005056bdf378", "C_TITLE": "万事俱备 联调联试——市妇女儿童医院新院区即将运营", "D_APPLYTIME": "2020-06-24" }, { "U_ID": "2f27d9b2b55411ea8f25005056bdf378", "C_TITLE": "组建专科联盟，服务妇幼健康 ——我院与市第五人民医院举行专科联盟签约暨“关爱千日，妇幼名医进基层”联合义诊活动", "D_APPLYTIME": "2020-06-23" }, { "U_ID": "9e693af0aa0111ea8f25005056bdf378", "C_TITLE": "珠澳一家亲 携手助复学", "D_APPLYTIME": "2020-06-09" }]
    const newsList = [{ "U_ID": "6f01b54be3b811ea9603005056bdf378", "C_TITLE": "保健康 惠民生 树标杆 ——我院举办2020年“中国医师节”庆祝暨表彰活动", "D_APPLYTIME": "2020-08-21" }, { "U_ID": "fe863ad8d1f911ea8f25005056bdf378", "C_TITLE": "珠海市妇女儿童医院（珠海市妇幼保健院）7月29日正式启用", "D_APPLYTIME": "2020-07-30" }, { "U_ID": "4622e4f6cd6811ea8f25005056bdf378", "C_TITLE": "珠海市妇幼保健院南北院区顺利完成第一例危重病人转运", "D_APPLYTIME": "2020-07-24" }, { "U_ID": "e0021c65c02b11ea8f25005056bdf378", "C_TITLE": "市卫生健康局局长徐超龙赴怒江慰问帮扶医生", "D_APPLYTIME": "2020-07-07" }, { "U_ID": "5f691b15b5af11ea8f25005056bdf378", "C_TITLE": "万事俱备 联调联试——市妇女儿童医院新院区即将运营", "D_APPLYTIME": "2020-06-24" }, { "U_ID": "2f27d9b2b55411ea8f25005056bdf378", "C_TITLE": "组建专科联盟，服务妇幼健康 ——我院与市第五人民医院举行专科联盟", "D_APPLYTIME": "2020-06-23" }, { "U_ID": "9e693af0aa0111ea8f25005056bdf378", "C_TITLE": "珠澳一家亲 携手助复学", "D_APPLYTIME": "2020-06-09" }]
    const [activeItem, setActiveItem] = useState('健康管理科')

    const subjectItemClick = (itemText) => {
        setActiveItem(itemText)
        // const setInfo = useEffect()
    }
    let i = 0
    return (
        <ExpertRecommendWrapper>
            <Row>
                <Col span={24}>
                    <NewsTitle>
                        <span>专家介绍</span>
                    </NewsTitle>
                </Col>
            </Row>
            <SubjectClassifyWrapper>
                <Row gutter={[16, 16]}>
                    {
                        subjectClassifyObj.map((item, index) => {
                            return (
                                <Col key={index} span={4}>
                                    <SubjectItem
                                        onClick={() => { subjectItemClick(item.text) }}
                                        className={item.text === activeItem ? 'active' : ''}>
                                        {item.text}
                                    </SubjectItem>
                                </Col>)
                        })
                    }
                </Row>
            </SubjectClassifyWrapper>
            <DoctorInfoWrapper>
                <ul>
                    <li>
                        <img src='/doctor.jpg' />
                        <div>
                            <span className='doctor-name'>{`${doctorList.name}`}</span>
                            <span>科室 {doctorList.C_DEPARTMENT_NAME}</span>
                            <span className='intro'>介绍</span>
                        </div>
                    </li>

                    <li>
                        <img src='/doctor.jpg' />
                        <div>
                            <span className='doctor-name'>{`${doctorList.name}`}</span>
                            <span>科室 {doctorList.C_DEPARTMENT_NAME}</span>
                            <span className='intro'>介绍</span>
                        </div>
                    </li>

                    <li>
                        <img src='/doctor.jpg' />
                        <div>
                            <span className='doctor-name'>{`${doctorList.name}`}</span>
                            <span>科室 {doctorList.C_DEPARTMENT_NAME}</span>
                            <span className='intro'>介绍</span>
                        </div>
                    </li>

                    <li>
                        <img src='/doctor.jpg' />
                        <div>
                            <span className='doctor-name'>{`${doctorList.name}`}</span>
                            <span>科室 {doctorList.C_DEPARTMENT_NAME}</span>
                            <span className='intro'>介绍</span>
                        </div>
                    </li>
                    <li>
                        <img src='/doctor.jpg' />
                        <div>
                            <span className='doctor-name'>{`${doctorList.name}wewewe`}</span>
                            <span>科室 {doctorList.C_DEPARTMENT_NAME}</span>
                            <span className='intro'>介绍</span>
                        </div>
                    </li>


                </ul>
                {/* <li>4</li>
                <li>5</li>
                <li>6</li> */}
            </DoctorInfoWrapper>
        </ExpertRecommendWrapper>
    )
}