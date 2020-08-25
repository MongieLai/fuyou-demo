import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd';
import { Menu } from 'antd';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';



const { SubMenu } = Menu;


export default function Header(props) {

    return (
        <div>
            {/* <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </HashRouter> */}
            <Row justify={'center'}>
                <Col xs={24} sm={16} >
                    <img src='/LOGO.png'></img>
                </Col>
            </Row>



            <Row justify={'center'}>
                <Col xs={24} sm={16}>
                    {/* <HashRouter>
                        <Switch> */}
                    <HashRouter>
                        <Menu mode="horizontal" defaultSelectedKeys={['home:1']}>
                            <Menu.Item key="home:1">
                                <Link to="/">首页</Link>
                            </Menu.Item>
                            <SubMenu title="医院概况">
                                <Menu.Item key="general:1">
                                    <Link to='/hospitalGeneral/'>医院简介</Link>
                                </Menu.Item>
                                <Menu.Item key="general:2">医院领导</Menu.Item>
                                <Menu.Item key="general:3">组织架构</Menu.Item>
                                <Menu.Item key="general:4">医院荣誉</Menu.Item>
                                <Menu.Item key="general:5">院训宗旨</Menu.Item>
                            </SubMenu>
                            <SubMenu title="科室专家">
                                <Menu.Item key="officeSpecialist:1">科室介绍</Menu.Item>
                                <Menu.Item key="officeSpecialist:2">专家</Menu.Item>
                                <Menu.Item key="officeSpecialist:3">名医风采</Menu.Item>
                            </SubMenu>
                            <SubMenu title="新闻中心">
                                <Menu.Item key="b:1">医院动态</Menu.Item>
                                <Menu.Item key="b:2">通知公告</Menu.Item>
                                <Menu.Item key="b:3">视频新闻</Menu.Item>
                            </SubMenu>
                            <SubMenu title="护理园地">
                                <Menu.Item key="c:1">护士风采</Menu.Item>
                                <Menu.Item key="c:2">护理培训</Menu.Item>
                            </SubMenu>
                            <SubMenu title="便民服务">
                                <Menu.Item key="a:1">门诊就诊</Menu.Item>
                                <Menu.Item key="a:2">急诊就诊</Menu.Item>
                                <Menu.Item key="a:3">急诊指南</Menu.Item>
                                <Menu.Item key="a:4">住院指南</Menu.Item>
                                <Menu.Item key="a:5">楼层分布</Menu.Item>
                                <Menu.Item key="a:6">体检服务</Menu.Item>
                                <Menu.Item key="a:7">乘车服务</Menu.Item>
                                <Menu.Item key="a:8">医疗服务项目</Menu.Item>
                            </SubMenu>
                            <SubMenu title="健康教育">
                                <Menu.Item key="k:1">讲座通知</Menu.Item>
                                <Menu.Item key="k:2">健康知识</Menu.Item>
                            </SubMenu>
                            <SubMenu title="科研教学">
                                <Menu.Item key="d:1">科研动态</Menu.Item>
                                <Menu.Item key="d:1">学术成果</Menu.Item>
                                <Menu.Item key="d:1">学习班</Menu.Item>
                            </SubMenu>
                            <SubMenu title="党群建设">
                                <Menu.Item key="r:1">党建风采</Menu.Item>
                                <Menu.Item key="r:2">工会天地</Menu.Item>
                                <Menu.Item key="r:3">团务天地</Menu.Item>
                            </SubMenu>
                            <SubMenu title="院务公开">
                                <Menu.Item key="t:1">科室介绍</Menu.Item>
                                <Menu.Item key="t:2">专家</Menu.Item>
                                <Menu.Item key="t:3">名医风采</Menu.Item>
                            </SubMenu>
                            <SubMenu title="联系我们">
                                <Menu.Item key="y:1">人才招聘</Menu.Item>
                            </SubMenu>
                        </Menu></HashRouter>
                    {/* </Switch>

                    </HashRouter> */}
                </Col>
            </Row>
        </div>
    )
}