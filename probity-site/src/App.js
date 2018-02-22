import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import {AppStyles, Container, Copyright, Footer, Header, SocialMedia, TopBar} from './style/style.js'
import Linkedin from 'react-icons/lib/fa/linkedin';

import logoImg from './images/logo.png'
import Routes from 'react-static-routes'

const App = () => (
  <Router>
    <AppStyles>
      <Header />
      <div style={{width:'100%', position: 'fixed', paddingBottom: '120px', zIndex: '1', color: '#fff', height: 'auto'}}>
        <nav>
          <Link to="/"><img width="300" src={logoImg}/></Link>
          <div style={{display: 'inline-block', paddingLeft:'5rem', align: 'center'}}>
            <Link to="/rpa">RPA</Link>
            <Link to="/products">Products</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/the-company">The Company</Link>
            <Link to="/thought-leadership">Thought Leadership</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </nav>
      </div>
      <div className="content">
        <Routes />
      </div>
      <Footer>
          <Container>
            <Copyright>Copyright © 2016 Probotics</Copyright>
            <SocialMedia>
              <Link to="https://www.linkedin.com/company/probity-consulting-limited">
                <Linkedin size = {22}/>
              </Link>
            </SocialMedia>
          </Container>
      </Footer>
    </AppStyles>
  </Router>
)

export default hot(module)(App)
