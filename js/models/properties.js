function getProperties(type) {
  this.type = type || null;

  var root = getProjectRoot();

  var properties = [
    {
      id: 1,
      type: "buy",
      available: true,
      link:
        "https://drive.google.com/open?id=0B8RnZnIJqnmQT29ublVhRUhmWnBIajE4VVhKLXpuQkVWTS1J",
      thumbnail: root + "/static/properties/1/0.jpg",
      photos: [],
      title: "OCEAN POINTE: 91-1268 Kaiopua St. | Ewa Beach",
      description:
        "Extremely energy efficient = low monthly bills. LED lighting, dual flush toilets, dual pane windows, and so much more",
      price: "$599,950",
      location: "Hanalei Street",
      footnote:
        "Pictures are representative of floor plan and finishes but not of the exact house. Available to show 7 days a week.",
      features: [
        "4 bedroom",
        "3 bathroom",
        "Open floor plan",
        "large side yard",
        "gated community",
        "10 minute walk from beach",
      ],
      upgrades: [getUpgrade("tesla")],
    },
    {
      id: 2,
      type: "buy",
      available: true,
      link:
        "https://honolulu.craigslist.org/oah/reo/d/waianae-single-family-home-brand-new/6805560817.html",
      thumbnail: root + "/static/properties/6/img/4.jpg",
      photos: [],
      title: "HANALEI ST. DUPLEX - Available March 2019",
      description:
        "Extremely energy efficient = low monthly bills. LED lighting, dual flush toilets, dual pane windows, and so much more! Gated community that's a 10 minute walk from the beach... 4 bedroom, 3 bath open floor plan, large side yard! Upgrades throughout including custom flooring, custom tile, matching granite counters, and solid wood cabinets.",
      price: "$599,950",
      location: "Pokai Bay",
      footnote: "",
      features: [],
      upgrades: [],
    },
    {
      id: 3,
      type: "buy",
      available: false,
      thumbnail: root + "/static/home-images/tesla.jpg",
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
      upgrades: [getUpgrade("tesla")],
    },
    {
      id: 4,
      type: "buy",
      available: false,
      thumbnail: root + "/static/home-images/green.jpg",
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
      upgrades: [getUpgrade("tesla")],
    },
    {
      id: 5,
      type: "rent",
      available: true,
      thumbnail: root + "/static/home-images/ocean.jpg",
      link:
        "https://honolulu.craigslist.org/oah/apa/d/waianae-pokai-bay-ocean-view-duplex-home/6820408261.html",
      photos: [],
      title: "Brand New Ocean Front Duplex Home",
      description:
        "BRAND NEW Custom Home, Ground Floor of Duplex , Separate Entrance, Directly on the Beach Park, Easy Access for Kayak, SUP, Swim, Snorkel, Fish, Surf, Split Air Conditioning, Solar Powered House, Spacious Kitchen, Commercial Sink, Brand New Appliances, Large Refrigerator, Custom Tile Shower, Custom Granite Counters, Lifeproof/Waterproof Laminate Floors, Swim with dolphins in the bay daily :), Live your dream life!!!",
      price: "$2,400/mo",
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
      upgrades: [getUpgrade("tesla")],
    },
    {
      id: 6,
      type: "rent",
      available: true,
      thumbnail: root + "/static/properties/6/img/4.jpg",
      link:
        "https://honolulu.craigslist.org/oah/apa/d/waianae-brand-new-ocean-front-duplex/6816475203.html",
      photos: 23,
      title: "Pokai Bay Ocean View Duplex Home",
      description:
        "Ocean Front on Pokai Bay, Luxury, Direct Ocean Views, Great views of the Ocean AND Mountains, AIR CONDITIONING, Master Suite with 2 Walk-In Closets, Vaulted Ceilings, Covered Parking, Spacious Kitchen, Lanai (Balcony) off Living Room/Kitchen , Lanai (Balcony) off Master Bedroom, Swimming - Snorkeling, Kayaking - Surfing",
      price: "$2,300/mo",
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
      upgrades: [getUpgrade("tesla")],
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
