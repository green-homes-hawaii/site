function getProperties(type) {
  this.type = type || null;

  var properties = [
    {
      id: 1,
      type: "buy",
      thumbnail: "http://placehold.it/500",
      photos: [],
      title: "HANALEI ST. Duplex (2 Single Family Dwelling)",
      description:
        "Extremely energy efficient = low monthly bills. LED lighting, dual flush toilets, dual pane windows, and so much more",
      footnote:
        "Pictures are representative of floor plan and finishes but not of the exact house. Available to show 7 days a week last week of February.",
      price: "Starting at $599,950",
      features: [
        "4 bedroom",
        "3 bathroom",
        "Open floor plan",
        "large side yard",
        "gated community",
        "10 minutes from beach",
      ],
      upgrades: [
        {
          title: "Complete Solar Package",
          description:
            "Our Complete Solar Package features 2 Tesla Power walls and 25-30 panels that produce approximately $300 of electricity per month. You will save even more on your electric bills!",
          cost: "$49,950",
        },
        {
          title: "Custom Flooring",
        },
        {
          title: "Custom Tile",
        },
        {
          title: "Granite Countertops (entire house)",
        },
        {
          title: "Solid wood cabinests",
        },
      ],
    },
    {
      id: 2,
      type: "buy",
      thumbnail: "http://placehold.it/500",
      photos: [],
      description: "This is an example description of a property for SALE.",
      footnote: "",
      title: "Example property FOR SALE",
      price: "$500,000",
      features: [],
      upgrades: [
        {
          title: "",
          description: "",
          cost: "",
        },
      ],
    },
    {
      id: 3,
      type: "rent",
      thumbnail: "http://placehold.it/500",
      photos: [],
      description: "This is an example description of a property for RENT.",
      footnote: "",
      title: "Makaha Studio",
      price: "$100,000",
      features: [
        "Custom Studio + 2 Car Garage with A/C",
        "Only steps from the beach",
        "The garage is set up as a living room, for a total of 700 sqft of living area",
        "Soundproof studio and garage",
        "Split A/C in studio and garage",
        "Club quality speaker system in garage and studio",
        "Keypad entry to garage and studio",
        "Full-size appliances",
        "Custom bathroom including shower, sink, vanity, and tile",
        "Dual flush toilet",
        "LED lighting",
        "Built-in cabinets and Murphy bed",
        "Black out shades and privacy glass frosting",
        "Electric vehicle charger outlet",
        "Washer and Dryer on site",
        "Surfboard racks",
        "rolling coffee table",
        "Sewer and water included",
      ],
      upgrades: [
        {
          title: "",
          description: "",
          cost: "",
        },
      ],
    },
    {
      id: 4,
      type: "rent",
      thumbnail: "http://placehold.it/500",
      photos: [],
      description: "This is an example description of a property for RENT.",
      footnote:
        "Sewer and water included in rental price, but electricity is separate",
      title: "Example property FOR RENT",
      price: "$500,000",
      features: [],
      upgrades: [
        {
          title: "",
          description: "",
          cost: "",
        },
      ],
    },
  ];

  if (this.type) {
    return properties.filter(function(property) {
      return property.type === this.type;
    });
  } else return properties;
}
