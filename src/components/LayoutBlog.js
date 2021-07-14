import React from 'react'
import {MDXProvider} from '@mdx-js/react'
import Layout from './Layout'

import CodeBlock from './CodeBlock'

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock
}
export default props => (
  <MDXProvider components={components}>
    <Layout {...props}></Layout>    
  </MDXProvider>
)
