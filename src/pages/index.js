// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage} from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this amazing site by following the Gatsby Tutorial</p>
      <StaticImage
        alt="Cat"
        src="../images/cat-01.jpg"
      />
    </Layout>
  )
}

// Seo updates the browser tab to the page title, followed by the site name
// for example: Home Page | My Amazing Site
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage
