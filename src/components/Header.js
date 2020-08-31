import React, { Component } from 'react'
import styled from 'styled-components'
import { Nav, NavItem, Navbar, NavDropdown } from 'react-bootstrap'
// import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import Carousel from './Header/Carousel'
const Img = styled.img`
    width:100%;
`

export default class Header extends Component {
    render() {
        return (
            <div>
                <Img src='/LOGO.png'></Img>
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">首页</Nav.Link>
                            <Nav.Link href="#link">医院概况</Nav.Link>
                            <NavDropdown title="科室专家" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">首页</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">医院概况</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">科室专家</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Carousel />
            </div>

        )
    }
}