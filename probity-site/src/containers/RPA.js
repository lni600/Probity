
import React from 'react'
//
import brainImg from '../images/head.png'
import peopleImg from '../images/People-at-desks-hi-res.jpg'
import sideBar1Img from '../images/side-bar-1.png'
import sideBar2Img from '../images/side-bar-2.png'
import {Article, Container, ContentBody, Heading, SectionTitle, SideBar, Title} from '../style/style.js'

export default () => (
  <Container>
    <Heading>
        <img style={{width: '50%', height: '50%',float:'left'}} src={peopleImg}/>
        <span style={{padding: '2rem', width: '50%', float:'right'}}>
          <Title>Robotic Process Automation</Title>
          <p>Allowing your staff to work on value added activities whilst leaving the boring, time-consuming tasks to robots</p>
        </span>
    </Heading>

    <ContentBody>
      <SideBar>
        <img src={sideBar1Img}/>
        <img src={sideBar2Img}/>
      </SideBar>
      <Article>
        <SectionTitle>What is Robotic Process Automation ?</SectionTitle>
        <p>Process automation Robotic process automation (RPA) is the application of technology that allows an organisation to deploy computer software or a “robot” to capture and interpret existing applications for processing a transaction, manipulating data, triggering responses and communicating with other digital systems.</p>
        <p>Any company that uses labour on a large scale for general knowledge process work, where people are performing high-volume, highly transactional process functions, will boost their capabilities and save money and time with robotic process automation software.</p>
        <p>Just as industrial robots are remaking the manufacturing industry by creating higher production rates and improved quality, RPA “robots” are revolutionizing the way we think about and administer business processes, IT support processes, workflow processes, remote infrastructure and back-office work. RPA provides dramatic improvements in accuracy and cycle time and increased productivity in transaction processing while it elevates the nature of work by removing people from dull, repetitive tasks.</p>
        <p>The technology of RPA can be applied specifically to a wide range of industries.</p>
        <p>Technologies like presentation-layer automation software – a technology that mimics the steps of a rules-based, non-subjective process without compromising the existing IT architecture – are able to consistently carry out prescribed functions and easily scale up or down to meet demand. Process automation can expedite back-office tasks in finance, procurement, supply chain management, accounting, customer service and human resources, including data entry, purchase order issuing, creation of online access credentials, or business processes that require “swivel-chair” access to multiple existing systems.</p>

        <h3>IT support and management</h3>
        <p>Automated processes in the remote management of IT infrastructures can consistently investigate and solve problems for faster process throughput. RPA can improve service desk operations and the monitoring of network devices. Separating scalability from human resources allows a company to handle short-term demand without extra recruiting or training.</p>

        <h3>Automated assistant</h3>
        <p>As in voice recognition software or automated online assistants, developments in how machines process language, retrieve information and structure basic content mean that RPA can provide answers to employees or customers in natural language rather than in software code. This technology can help to conserve resources for large call centres and for customer interaction centres.</p>
        <p>As RPA brings more technologically-advanced solutions to businesses around the world, operating models that adopt automation, whether in-house or off-shored, will cut costs, drive efficiency and improve quality.</p>

        <img src={brainImg} alt="" />

        <SectionTitle>Benefits of RPA</SectionTitle>
        <p>Robotic process automation (RPA) applies specific technologies to automate routine, standardised tasks in support of an enterprise’s knowledge workers. By freeing human employees from these mundane tasks to apply themselves to core business objectives, RPA offers a number of compelling benefits to the workplace.</p>

        <h3>Lower cost</h3>
        <p>Robotic process automation can create a 25-50% cost savings. Process automation enables 24/7/365 execution at a fraction of the cost of human equivalents. A software robot can cost as little as one-third the price of an offshore full-time employee (FTE) and as little as one-fifth the price of an onshore FTE.</p>
        <p>Prior to automation, one Business Process Outsource (BPO) service provider that handled the application for processing insurance benefits employed a full-time human employee who could complete the process in an average of 12 minutes. RPA software completed the process in one-third the time, tripling the transaction volume for one-tenth of the FTE cost. By automating this single process, the provider achieved a positive return on this investment within six months.</p>

        <h3>Higher efficiency</h3>
        <p>RPA offers an improved service delivery model by increasing production and accuracy, reducing cycle times and decreasing the need for ongoing training. Unlike humans, robots can work 24 hours a day, seven days a week. Typically, one robot can do the work of two to five FTEs.</p>
        <p>An enterprise user of an IT infrastructure RPA tool suite that was designed to work with existing investments improved its overall operational efficiency by cutting its mean time to resolution by 60 percent and by handling over half of its IT problems without manual intervention.</p>

        <h3>Advanced analytics</h3>
        <p>Process automation makes gathering and organizing data easier so a company can predict future outcomes and optimize their processes. Advanced analytic techniques create a feedback loop. The analysis determines areas of improvement, and the improved processes, in turn, produce more specific data that allows for further improvement of operations and higher levels of efficiency. Advanced analytics is an essential element in achieving regulatory compliance, cost effective growth and optimized operations.</p>

        <h3>Greater performance and quality</h3>

        <p>Out of every 100 steps, a human is likely to make 10 errors, even when carrying out somewhat redundant work. Robots are trustworthy, consistent and tireless. They can perform the same task the same way every time without error or fraudulence. RPA optimizes capabilities that grow organizational capacity.</p>
        <p>After deploying automation software to support a number of IT processes, one company was able to increase organizational productivity and capacity without extra recruiting or training. They achieved payback in approximately 15 months with a calculated return on investment of 141 percent and concluded that they could expect greater returns as they continued to automate more workflows.</p>
      </Article>
    </ContentBody>
  </Container>
)
