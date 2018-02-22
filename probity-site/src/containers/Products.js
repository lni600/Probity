
import React from 'react'
//
import uipathLogoImg from '../images/UiPath-vectorial-logo.jpg'
import uipathServerImg from '../images/UiPath_Server.png'
import uipathStudioImg from '../images/uipath-studio.png'

import {Container, ContentBody, Heading, SectionTitle, Title} from '../style/style.js'

export default () => (
  <div>
    <Container>
      <Title style={{size: '0.5em', align: 'center'}}> UiPath - RPA designed for the needs of global enterprises and BPOs</Title>
      <Heading>
          <span style={{padding: '2rem', width: '50%', float:'left'}}>
            <p>UiPath RPA is an enterprise computing platform dedicated to automating business processes. It provides:</p>
              <li><b>Business process modelling</b></li>
              <li><b>Deployment Management</b></li>
              <li><b>Access Control</b></li>
              <li><b>Remote Execution and Scheduling</b></li>
              <li><b>Execution Monitoring</b></li>
              <li><b>Auditing and Analytics</b> – In full compliance with the enterprise security and governance best practices</li>
          </span>
          <img style={{width: '50%', height: '50%',float:'rigth'}} src={uipathLogoImg}/>
      </Heading>

      <ContentBody>
          <SectionTitle>Products</SectionTitle>
          <p>UiPath Studio XXXX menu Item</p>
          <p>UiPath Studio is a highly visual productive environment where business users can model end-to-end business processes into a process diagram with simple drag and drop functionality</p>
          <img style={{width: '50%', height: '50%',float:'rigth'}} src={uipathStudioImg}/>
          <p>Advanced error checking history visibility ensure flawless execution and detailed project monitoring</p>

          <p>UiPath Orchestrator XXXX menu Item</p>
          <p>UiPath Orchestrator is a scalable RPA server, full integrated and equipped with centralised instrumentality for enterprise-class management, security, compliance, support and auditability.</p>
          <img style={{width: '50%', height: '50%',float:'rigth'}} src={uipathServerImg}/>
          <p>Our orchestrator records everything the robots do through log files and transforms them into advanced analytics</p>

          <p>UiPath Robots XXXX menu Item</p>
          <SectionTitle>UiPath Front Office Robots</SectionTitle>
          <p>UiPath Front Office Robot is the agent-assisted robot that shares the same workstation with human employees and assists them to automatically execute business activities</p>
          <SectionTitle>UiPath Back Office Robots</SectionTitle>
          <p>UiPath Back Office Robot is the autonomous software robot programmed to run unattended, independent from human interaction</p>
      </ContentBody>
    </Container>
    <p>a video '' XXXX with text XXXX and button XXXX to contact us</p>
    <video id="background-video" loop autoPlay>
                <source src={'https://www.youtube.com/watch?v=lMJXxhRFO1k'}/>
                Your browser does not support the video tag.
    </video>
    </div>
)
