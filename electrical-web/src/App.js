import React from 'react';
import { BrowserRouter, Switch, Route, /*Redirect*/ } from 'react-router-dom';

//components
import HomeScreen from './Screens/HomeScreen/Homescreen';
import AboutScreen from './Screens/AboutScreen/AboutScreen';
import ServicesScreen from './Screens/ServiceScreen/ServiceScreen';
// import ContactScreen from '';
import Nav from './Components/Nav/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter forceRefresh={true}>
            <Nav />
            <Switch>
              <Route exact path='/' render={() => <HomeScreen />} />
              <Route path='/about' render={() => <AboutScreen />} />
              <Route path='/contactMe' />
              {/* <Route path='/services' render={() => <Redirect to='/services/1'/>} /> */}
              <Route path='/services/:id' render={() => <ServicesScreen />} />
            </Switch>
            <Footer />
            </BrowserRouter>
    </div>
  );
}

export default App;
