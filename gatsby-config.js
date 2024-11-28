module.exports = {
  siteMetadata: {
    description: "Personal page of Jay Schulman",
    locale: "en",
    title: "Jay Schulman",
    formspreeEndpoint: "https://formspree.io/f/xzzbjqpw",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        theme: "gh-inspired",
      },
    },
  ],
}
