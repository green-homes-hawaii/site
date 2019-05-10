function getMedia() {
  var root = getProjectRoot();
  return [
    {
      id: 1,
      type: "video",
      media: {
        src: "https://www.youtube.com/embed/ktdF9L180gY",
      },
      title: "Living 808, Building and Designing an Energy Efficient Home",
      description:
        "Watch our interview with Living 808 where RJ dispells myths of energy efficiency, and explains the fundamentals of building and designing an energy efficient home!",
      link: {
        href: "https://www.youtube.com/watch?v=ktdF9L180gY",
        text: "Watch On Youtube",
      },
    },
    {
      id: 1,
      type: "article",
      media: {
        src: root + "/static/media-img/changing_paradise.jpg",
        alt: "Photo of RJ on the beach smiling",
      },
      title: "Bringing Affordable, Sustainable Housing to Hawai'i",
      description:
        "The numbers illustrate the extreme financial challenges of home ownership on a tropical island paradise: the median home in Hawaii costs $605,000, nearly $100,000 more than a comparable house in San Diego.",
      link: {
        href:
          "https://sites.sandiego.edu/usd-magazine/2018/01/changing-paradise",
        text: "Read the Full Article",
      },
    },
  ];
}
