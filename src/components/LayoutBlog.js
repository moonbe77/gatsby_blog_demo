import React from 'react'
import {MDXProvider} from '@mdx-js/react'

import CodeBlock from './CodeBlock'

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock
}
export default props => (
  <MDXProvider components={components}>
    <main {...props}></main>
  </MDXProvider>
)
// import * as React from 'react'
// import { Link } from 'gatsby'

// import Layout from './Layout'

// const LayoutBlog = ({ children }) => {

//   return (
//     <Layout >
//       <div><Link to="/">⬅</Link></div>
//       {children}
//     </Layout>
//   )
// }

// export default LayoutBlog