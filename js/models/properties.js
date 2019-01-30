function getProperties(type) {
  this.type = type || null;

  var properties = [
    {
      id: 1,
      type: "sale",
      thumbnail: "http://placehold.it/500",
      description: "This is an example description",
      title: "Example title property",
      price: "$100,000",
    },
    {
      id: 2,
      type: "sale",
      thumbnail: "http://placehold.it/500",
      description: "This is an example description",
      title: "Another property",
      price: "$500,000",
    },
    {
      id: 1,
      type: "rental",
      thumbnail: "http://placehold.it/500",
      description: "This is an example description",
      title: "Example title property",
      price: "$100,000",
    },
    {
      id: 2,
      type: "rental",
      thumbnail: "http://placehold.it/500",
      description: "This is an example description",
      title: "Another property",
      price: "$500,000",
    },
  ];

  if (this.type) {
    return properties.filter(function(property) {
      return property.type === this.type;
    });
  } else return properties;
}
