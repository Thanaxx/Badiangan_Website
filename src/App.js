import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Scroll from './components/ScrollToTop';
import News from './components/Newspage';
import Jobpage from './components/Jobspage';
import Tourismpage from './components/Tourismpage'
import Contactspage from './components/ContactPage'
import Faq from './components/Faq'
import Mayorpage from './components/Mayor'
import Vicemayorpage from './components/Vicemayor';
import Councilpage from './components/Council';
import Profilepage from './components/Profile';
import BackToTop from './components/BackToTop';
import Application from './components/JobApplication';

function App() {

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1600,
      delay: 100,
    });
  })

  return (
    <>
        <Router>
          <BackToTop />
          <Navigation/>
          <Scroll/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path="/news" exact component={News} />
            <Route path="/jobs" exact component={Jobpage} />
            <Route path="/tourism" exact component={Tourismpage} />
            <Route path="/contact" exact component={Contactspage} />
            <Route path="/faq" exact component={Faq} />
            <Route path="/mayor" exact component={Mayorpage} />
            <Route path="/vicemayor" exact component={Vicemayorpage} />
            <Route path="/council" exact component={Councilpage} />
            <Route path="/profile" exact component={Profilepage} />
            <Route path="/application-form" exact component={Application} />
          </Switch>

            <Footer/>
        </Router>
    </>
  );
}

export default App;
