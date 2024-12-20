import { graphql } from "gatsby"
import React from "react"
import CustomFonts from "../components/custom-fonts/custom-fonts"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import MainContent from "../components/main-content/main-content"
import SEO from "../components/seo/seo"
import Sidebar from "../components/sidebar/sidebar"
import StructuredData from "../components/structured-data/structured-data"
import RevealScript from "../components/reveal-script/reveal-script"
import "../styles/style.css"

const IndexPage = ({ data }) => {
    const { history, profile, projects, site, social } = data

    return (
        <div className="antialiased bg-back leading-normal font-text text-front">
            <SEO />
            <RevealScript />
            <StructuredData profile={profile} social={social.nodes} />
            <CustomFonts />
            <Header />
            <MainContent />
            <Sidebar />
            <Footer />
        </div>
    )
}

export default IndexPage 