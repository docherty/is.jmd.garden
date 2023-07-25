module.exports = {
  meta: {
    title: "James Docherty",
    description: "Notes from the front lines.",
    lang: "en",
    siteUrl: "https://jmd.is/",
  },
  feed: { // used in feed.xml.njk
    subtitle: "Notes from journeys around the internet and beyond.",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "https://jmd.is/",
    authorName: "James Docherty",
    authorEmail: "james@jmd.is"
  },
  hero: { // used in hero section of main page ie. index.html.njk
    title: "Welcome to my digital garden",
    description: "A place to store half-baked ideas, thoughts and notes.",
  }
}