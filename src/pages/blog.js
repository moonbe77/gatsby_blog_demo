import * as React from 'react'
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout'

const BlogPage = ({ data }) => {

  console.log(data);

  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      <ul>
        {data.allFile.nodes.map(file => {
          return (<li key={file.id}><Link to={`/${file.name}`}>{file.name}</Link></li>)
        })}
      </ul>
    </Layout>
  )
}



export const query = graphql`  {
  allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
    nodes {
      name
      ext
      id
    }
  }
}
`
export default BlogPage