module.exports = {
  meta: {
    title: "James Docherty",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    lang: "en",
    siteUrl: "jmd.is",
  },
  feed: { // used in feed.xml.njk
    subtitle: "Lorem ipsum dolor sit amet consecuteor",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "https://jmd.is",
    authorName: "John Doe",
    authorEmail: "james@jmd.is"
  },
  hero: { // used in hero section of main page ie. index.html.njk
    title: "Welcome to my digital garden",
    description: "A place to share my half-baked ideas and notes &amp; cruft gathered on my journey through the internet &amp; beyond,
  }
}