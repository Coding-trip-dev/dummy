import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Main from "../components/main"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Main />
  </Layout>
)

export default IndexPage
