import { graphql } from "gatsby"
import React from "react"
import CustomFonts from "../components/custom-fonts/custom-fonts"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import MainContent from "../components/main-content/main-content"
import SEO from "../components/seo/seo"
import Sidebar from "../components/sidebar/sidebar"
import StructuredData from "../components/structured-data/structured-data"
import "../styles/style.css"

const IndexPage = ({ data }) => {
    const { history, profile, projects, site, social } = data

    return (
        <div className="antialiased bg-back leading-normal font-text text-front">
            <SEO />
            <StructuredData profile={profile} social={social.nodes} />
            <CustomFonts />
            <Header initials={profile.initials} />
            <MainContent
                history={history}
                profile={profile}
                projects={projects}
                formspreeEndpoint={site.siteMetadata.formspreeEndpoint}
            />
            <Sidebar profile={profile} social={social.nodes} />
            <Footer
                name={profile.name}
                showThemeLogo={site.siteMetadata.showThemeLogo}
            />
        </div>
    )
}

export default IndexPage 