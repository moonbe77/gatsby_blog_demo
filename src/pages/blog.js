import * as React from 'react'
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout'

const BlogPage = ({ data }) => {

  // console.log(data);

  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      <ul>
        {data.allFile.nodes.map(file => {
          if (file.sourceInstanceName === 'blog') {
            return (<li key={file.id}>{file.name}</li>)
          }
        })}
      </ul>
    </Layout>
  )
}



export const query = graphql`
query {
  allFile{
    nodes {
      name,
      id,
      ext,
      base,
      sourceInstanceName,
    }
  }
}
`
export default BlogPage