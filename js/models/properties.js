function getProperties(type) {
  this.type = type || null;

  var root = getProjectRoot();

  var properties = [
    {
      id: 1,
      type: "buy",
      thumbnail: root + "/static/properties/solar.jpg",
      photos: [],
      title: "HANALEI ST. Duplex (2 Single Family Dwelling)",
      description:
        "Extremely energy efficient = low monthly bills. LED lighting, dual flush toilets, dual pane windows, and so much more",
      price: "Starting at $599,950",
      location: "Hanalei Street",
      footnote:
        "Pictures are representative of floor plan and finishes but not of the exact house. Available to show 7 days a week last week of February.",
      features: [
        "4 bedroom",
        "3 bathroom",
        "Open floor plan",
        "large side yard",
        "gated community",
        "10 minutes from beach",
      ],
    },
    {
      id: 2,
      type: "buy",
      thumbnail: root + "/static/properties/ocean.jpg",
      photos: [],
      title: "Oceanfront Homes",
      description:
        "Extremely energy efficient = low monthly bills. LED lighting, dual flush toilets, dual pane windows, and so much more",
      price: "$500,000",
      location: "Pokai Bay",
      footnote: "",
      features: [
        "4 bedroom",
        "3 bathroom",
        "Open floor plan",
        "large side yard",
        "gated community",
        "10 minutes from beach",
      ],
    },
    {
      id: 3,
      type: "buy",
      thumbnail: root + "/static/properties/tesla.jpg",
      photos: [],
      title: "Green Homes at Laulaulei",
      description:
        "Extremely energy efficient = low monthly bills. LED lighting, dual flush toilets, dual pane windows, and so much more",
      price: "$100,000",
      location: "Laulaulei",
      footnote: "",
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
    },
    {
      id: 4,
      type: "buy",
      thumbnail: root + "/static/properties/green.jpg",
      title: "Communities of the Future",
      description:
        "Extremely energy efficient = low monthly bills. LED lighting, dual flush toilets, dual pane windows, and so much more",
      price: "$500,000",
      photos: [],
      location: "Laulaulei",
      footnote: "",
      features: [
        "4 bedroom",
        "3 bathroom",
        "Open floor plan",
        "large side yard",
        "gated community",
        "10 minutes from beach",
      ],
    },
    {
      id: 5,
      type: "rent",
      thumbnail: root + "/static/properties/green.jpg",
      photos: [],
      title: "Catchy Title about this Hawt Rental",
      description:
        "Extremely energy efficient = low monthly bills. LED lighting, dual flush toilets, dual pane windows, and so much more",
      price: "$100,000",
      location: "Makaha",
      footnote:
        "Sewer and water included in rental price, but electricity is separate",
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
    },
  ];

  if (this.type) {
    return properties.filter(function(property) {
      return property.type === this.type;
    });
  } else return properties;
}

function getProperty(id) {
  var properties = getProperties();
  return properties.filter(function(property) {
    return property.id === id;
  })[0];
}
