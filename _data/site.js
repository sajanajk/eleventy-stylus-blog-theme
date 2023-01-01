module.exports = {
  meta: {
    title: "European News Wire",
    description: "Latest News in Europe.",
    lang: "en",
    siteUrl: "https://example.com/",
  },
  feed: { // used in feed.xml.njk
    subtitle: "Lorem ipsum dolor sit amet consecuteor",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "https://example.com/",
    authorName: "John Doe",
    authorEmail: "johndoe@example.com"
  },
  hero: { // used in hero section of main page ie. index.html.njk
    title: "Read Daily Updates on Europe",
    description: "European News Wire is Europe's most trusted news source about latest ongoings within the region."
  }
}
