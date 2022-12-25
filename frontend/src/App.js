import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
// Routing
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
// import Loader from './components/Loader'
// import LoadingSpinner from './components/LoadingSpinner'

// Screens
import HomeScreen from './screens/Home'

import LoginScreen from './screens/Login'
import RegisterScreen from './screens/Register'
import ProfileScreen from './screens/Profile'

import Reset from './screens/Reset'
import NewPassword from './screens/NewPassword'


// History
import history from './utils/history'

import RefundPolicy from './screens/RefundPolicy'
import PrivacyPolicy from './screens/PrivacyPolicy'
import TermsAndConditions from './screens/TermsAndConditions'
import ContactUs from './screens/ContactUs'

import Role from './screens/Role'

import About from './screens/Abouts'



const App = () => {

    return (
      <main  class="app">
          <Router history={history}>
            <Header />
            <main class="app-main" style={{"padding-top":"3.5rem;"}}>

            <div class="wrapper">
                <Route path='/' component={HomeScreen} exact />
                <Route path='/register' component={RegisterScreen} />
                <Route path='/about' component={About} />
                <Route path='/contact-us' component={ContactUs} />
                <Container>
                    <Route path='/terms-condition' component={TermsAndConditions} />
                    <Route path='/privacy-policy' component={PrivacyPolicy} />
                    <Route path='/refund-policy' component={RefundPolicy} />
                
                    <Route path='/profile' component={ProfileScreen} />
                    <Route path='/login' component={LoginScreen} />
    
                    <Route exact path='/reset' component={Reset} />
                    <Route path='/reset/:token' component={NewPassword} />

                    <Route path='/Role' component={Role} />
            
    
                </Container>
                </div>
            </main>
            {/* <Footer /> */}
        </Router>
      </main>

    )
}

export default App
