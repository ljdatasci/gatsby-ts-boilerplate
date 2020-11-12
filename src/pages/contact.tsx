// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

type DataProps = {
  site: {
    siteMetadata: {
      author: string
    }
    buildTime: string
  }
}

const Contact: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact Us</h1>
    <p>You're currently on the page "{path}" which was built on {data.site.buildTime}.</p>
    <p>Written by {data.site.siteMetadata.author}</p>
    <p>To learn more, head over to our <a href="https://www.gatsbyjs.com/docs/typescript/">documentation about TypeScript</a>.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact

export const query = graphql`
  {
    site {
      siteMetadata {
        author
      }
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
