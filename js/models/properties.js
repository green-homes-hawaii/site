function getProperties(type) {
  this.type = type || null;

  var properties = [
    {
      id: 1,
      type: "buy",
      thumbnail: "http://placehold.it/500",
      description: "This is an example description of a property for SALE.",
      title: "Example property FOR SALE",
      price: "$100,000",
    },
    {
      id: 2,
      type: "buy",
      thumbnail: "http://placehold.it/500",
      description: "This is an example description of a property for SALE.",
      title: "Example property FOR SALE",
      price: "$500,000",
    },
    {
      id: 3,
      type: "rent",
      thumbnail: "http://placehold.it/500",
      description: "This is an example description of a property for RENT.",
      title: "Example property FOR RENT",
      price: "$100,000",
    },
    {
      id: 4,
      type: "rent",
      thumbnail: "http://placehold.it/500",
      description: "This is an example description of a property for RENT.",
      title: "Example property FOR RENT",
      price: "$500,000",
    },
  ];

  if (this.type) {
    return properties.filter(function(property) {
      return property.type === this.type;
    });
  } else return properties;
}
