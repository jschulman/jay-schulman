module.exports = {
  siteMetadata: {
    description: "Personal page of Jay Schulman",
    locale: "en",
    title: "Jay Schulman",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "classic",
      },
    },
  ],
}
