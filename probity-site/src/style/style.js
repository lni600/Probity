import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import LocationIcon from 'react-icons/lib/md/location-on';
import PhoneIcon from 'react-icons/lib/md/local-phone';

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`

//1024
//768
export const TopBar = styled.div`
  width: 100%;
  height: 3rem;
  background: #090f85;

  text{
    font-family: Poppins;
    font-size: 13px;
    color: white;
  }
`

export const Footer = styled.div`
  display: block;
  position: relative;
  width: 100%;
  bottom: auto;
  height: 4rem;
  background: #090f85;
`

export const Container = styled.div`
  width: 60%;
  margin: auto;

  @media (max-width: 1024px) {
      width: 70%;
  }
  @media (max-width: 768px) {
      width: 90%;
  }
`

export const Copyright = styled.div`
  display: inline-block;
  float: left;
  margin-left: 5rem;
  margin-top: 1.5rem;

  font-family: Poppins;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);

  @media (max-width: 400px) {
      float: right;
      width: 30%;
  }
`

export const SocialMedia = styled.div`
  padding: 0.5rem;
  border-radius: 3rem;
  display: inline-block;
  float: right;
  margin-right: 5rem;
  margin-top: 1rem;
  background: white;

  &:hover {
    background: lightBlue;
  }

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    float: middle;
    width: 100%;
  }
`

export const AppStyles = styled.div`
  a {
    text-decoration: none;
    color: #090f85;
    font-weight: bold;
  }

  nav {
    width: 60%;
    margin: auto;
    background: #fff;
    left: 0;
    top: 0;
    right: 0;
    bottom: auto;

    a {
      color: #090f85;
      padding: 1rem;
      display: inline-block;

      &:hover {
        color: black;
      }
    }

    // :after {
    //     content: '';
    //     position: absolute;
    //     left: 0;
    //     top: 0;
    //     right: 0;
    //     bottom: 0;
    //     background: rgba(0, 0, 0, 0.1);
    //     z-index: 2;
    //     display: block;
    // }
  }

  .content {
    position: relative;
    margin-top: 5rem;
    vertical-align: center;
    horizontal-align: center;
  }
`
export const SectionTitle = styled.h1`
    font-family: Poppins;
    font-weight: 700;
    letter-spacing: -0.06em;
    color: #222222;
    padding: 0;
    margin: 0 0 23px;
    font-size: 45px;
    line-height: 60px;
    ::after {
      content: '';
      border-radius: 3px;
      margin: 4px 0 0;
      display: block;
      width: 35px;
      height: 6px;
      background: #c7dae5;
    }
`
export const Title = styled.h1`
  font-size: 3.5em;
  text-align: left;
  ::after {
    content: '';
    border-radius: 3px;
    margin: 4px 0 0;
    display: block;
    width: 35px;
    height: 6px;
    background: #c7dae5;
  }
`;

export const Heading = styled.div`
  display: flex;
  margin: 0.5rem;
  padding: 1rem;
  flex-direction: row;
    li {
      padding: 0.5rem;
      font-size: 13px;
    }
`;

export const ContentBody = styled.div`
  display: flex;
  margin: 0.5rem;
  padding: 1rem;
  flex-direction: row;
`;

export const Article = styled.section`
  padding-left: 8em;
  width: 80%;
  float:'right';
`;

export const SideBar = styled.section`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

const Wellington = {
  address: "Level 7 Molesworth House 101 Molesworth Street PO Box 10619, Wellington",
  phone: "+64 (4) 499 6024",
  city: "Wellington Office",
}

const Auckland = {
  address: "Level 1 Cathedral House 48-52 Wyndham Street, Auckland",
  phone: "+64 (9) 379 7595",
  city: "Auckland Office",
}

export class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAucklandInfo: true,
    };
  }

  render() {
    return (
      <TopBar>
        <Container>
           <div style={{float: 'right',  paddingRight: '5rem', overflow: 'hidden'}}>
              <span style={{paddingRight: '2rem'}}>
                <LocationIcon size = {22} style={{display: 'inline-block', padding: '12px', color: '#c7dae5'}} />
                <text>{this.state.showAucklandInfo ? Auckland.address : Wellington.address}</text>
              </span>
              <span style={{paddingRight: '2rem'}}>
                <PhoneIcon size = {22} style={{display: 'inline-block', padding: '12px', color: '#c7dae5'}}/>
                <text> {this.state.showAucklandInfo ? Auckland.phone : Wellington.phone}</text>
              </span>
              <button style={{height: '100%'}} onClick={() => this.setState(state => ({showAucklandInfo: !this.state.showAucklandInfo}))}> {this.state.showAucklandInfo ? Auckland.city : Wellington.city}</button>
           </div>
        </Container>
      </TopBar>
    );
  }
}
