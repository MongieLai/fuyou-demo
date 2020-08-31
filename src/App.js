import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import { HashRouter, Route, Switch, hashHistory } from 'react-router-dom';
import Home from './views/Home'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import HospitalGeneral from './views/HospitalGeneral'
import Header from './components/Header'
const MainContainer = styled.div`
  display:flex;
  justify-content:center;
  /* flex-direction:column; */
`

function App() {
  return (
    <MainContainer className="row">
      <div className="col-xs-12 col-sm-10 col-md-8" >
        <Header />
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/hospitalGeneral' component={HospitalGeneral} />
          </Switch>
        </HashRouter>
      </div>
    </MainContainer>

    // <div>
    //   <Row justify={'center'}>
    //     <Col xs={24} lg={16} md={18} sm={22}>
    //       <Header />
    //       <HashRouter>
    //         <Switch>
    //           <Route exact path="/" component={Home} />
    //           <Route path='/hospitalGeneral' component={HospitalGeneral} />
    //         </Switch>
    //       </HashRouter>
    //     </Col>
    //   </Row>
    //   <Footer />
    // </div>
  )
}

export default App;
