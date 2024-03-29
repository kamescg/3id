import React from "react"

import { Site } from 'layout'
import { SEO } from "components"

const NotFoundPage = () => (
  <Site>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Site>
)

export default NotFoundPage
