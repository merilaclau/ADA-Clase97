import React, {Fragment} from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import './App.scss';
import MainHeader from './components/MainHeader/MainHeader';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Partners from './pages/Partners/Partners';


const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <MainHeader/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/partners" component={Partners}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
