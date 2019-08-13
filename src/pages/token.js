import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Container } from "atoms"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Container py={50}>
      <SEO title="Initial Token Offering" />
      <h1>Token</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut ligula vitae erat venenatis tincidunt. Fusce ante purus, pharetra at tempus et, varius at neque. Sed dapibus non dui vitae scelerisque. Nunc eget odio nec tortor imperdiet tempor. Vestibulum vel suscipit odio. Morbi quis gravida massa. Quisque at diam leo. Fusce ac dui vel eros lobortis euismod id at est. In turpis sapien, fringilla tincidunt erat vel, bibendum suscipit augue. Vivamus maximus auctor auctor.</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default SecondPage
