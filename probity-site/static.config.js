import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default {
  getSiteData: () => ({
    title: 'Probotics',
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/rpa',
        component: 'src/containers/RPA',
      },
      {
        path: '/products',
        component: 'src/containers/Products',
      },
      {
        path: '/solutions',
        component: 'src/containers/Solutions',
      },
      {
        path: '/the-company',
        component: 'src/containers/The-Company',
      },
      {
        path: '/thought-leadership',
        component: 'src/containers/Thought-Leadership',
      },
      {
        path: '/contact-us',
        component: 'src/containers/Contact-Us',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },

  siteRoot: "http://www.probotics.nz/",

  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
