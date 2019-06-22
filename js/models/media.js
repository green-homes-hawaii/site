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
      id: 2,
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
    {
      id: 3,
      type: "article",
      media: {
        src: root + "/static/home-images/community.jpg",
        alt: "Overview draft of Communities at Laulaulei",
      },
      title: "Honolulu Star: Early Days of Green Homes at Laulaulei",
      description:
        "'It has been rough' said R.J. Martin, a 34-year old history lecturer who has been working on the project caled Green Homes at Laulaulei for several years and has encountered financial difficulties that threaten his dream of providing the 25 homes for moderate-income families.",
      link: {
        href:
          "https://drive.google.com/file/d/0B8BYLcIsfATqc0N1UDVmRmx4RzBYY19KRjVWWGxjcjFPeU5J/view?usp=sharing",
        text: "View the Newspaper Clipping",
      },
    },
  ];
}
