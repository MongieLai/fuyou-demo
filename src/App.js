import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import { HashRouter, Route, Switch, hashHistory } from 'react-router-dom';
import Home from './views/Home'
import HospitalGeneral from './views/HospitalGeneral'
function App() {
  return (
    <div>
      <Header></Header>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/hospitalGeneral' component={HospitalGeneral}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
