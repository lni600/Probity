import React from 'react'
import { withSiteData } from 'react-static'
//
import Carousel from 'nuka-carousel'
import femaleRobotImg from '../images/Female-robot.jpg'
import fingerTouchImg from '../images/Robot-and-Human-finger-touching.jpg'
import thinkingMachineImg from '../images/Thinking-Machine.jpg'

export default withSiteData(() => (
  <div>
    <div style = {{positon: 'relative', overflow: 'hidden', width: '100%', maxHeight: '700px', height: '700px', alignItems: 'center'}}>
      <Carousel autoplay={true} speed={2000} cellAlign="center" edgeEasing="easeOutCirc">
        <img style = {{positon: 'absolute',bottom: '-9999px',left: '-9999px',right: '-9999px',margin: 'auto'}} src={femaleRobotImg}/>
        <img style = {{positon: 'absolute',bottom: '-9999px',left: '-9999px',right: '-9999px',margin: 'auto'}} src={fingerTouchImg}/>
        <img style = {{positon: 'absolute',bottom: '-9999px',left: '-9999px',right: '-9999px',margin: 'auto'}} src={thinkingMachineImg}/>
      </Carousel>
      </div>
    <h1 style={{ textAlign: 'center' }}>Welcome to Probity</h1>
  </div>
))
