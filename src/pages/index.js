import * as React from "react"
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <h4>Welcome to my Gatsby  index</h4>
      <StaticImage
        alt="Clifford, a reddish-brown Pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  )
}

export default IndexPage
