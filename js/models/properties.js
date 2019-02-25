function getProperties(type) {
  this.type = type || null;

  var root = getProjectRoot();

  var properties = [
    {
      id: 1,
      type: "buy",
      available: true,
      thumbnail: root + "/static/properties/solar.jpg",
      photos: [],
      title: "HANALEI ST. Duplex (2 Single Family Dwellings)",
      description:
        "Extremely energy efficient = low monthly bills. LED lighting, dual flush toilets, dual pane windows, and so much more",
      price: "$649,950",
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
      upgrades: [
        {
          title: "Tesla Package",
          price: "$50,000",
          includes:
            "Includes 2 Tesla Power walls and photovoltic roofing panels.",
        },
      ],
    },
    {
      id: 2,
      type: "buy",
      available: false,
      alternate_text: "Available March 2019",
      thumbnail: root + "/static/properties/ocean.jpg",
      photos: [],
      title: "Oceanfront Homes",
      description:
        "This luxurious 2,000+ sqft. home looks and feels new! Private courtyard, great for entertaining. Manicured and fenced yard, full bath and bedroom on the first floor, tile throughout downstairs, 2 car garage with 1 bonus pagved parking space behind double gate, and vaulted ceiling in master suite. Leased solar PV system = very low electric bills. New Central AC, dishwasher, and carpet in downstairs bedroom. Automatic yard sprinklers, Kohler fixtures and custom blinds. No expense spared to keep this home perfect.",
      price: "$789,000",
      location: "Pokai Bay",
      footnote:
        "Amenities Include Bathroom on 1st floor, Full Bath on 1st Floor, Landscaped, Patio/Deck, Wall/Fence, AC Central, Auto Garage Door Opener, Blinds, Cabel TV, Ceiling Fan, Chandelier, Convection Oven, Dishwasher, Disposal, Dryer, Microwave Hood, Photovoltiac, Refridger, Smoke Detector, Washer.",
      features: [
        "4 bedrooms",
        "3 bathroom",
        "Living Area: 2,042 sqft.",
        "Lanai Area: 115 sqft.",
        "Other Area: 115 sqft.",
        "Land Area: 4,730 sqft.",
        "Garage: 400 sqft.",
        "Built: 2006",
        "Association Fee: $90/mo.",
        "Taxes: $194/mo",
      ],
    },
    {
      id: 3,
      type: "buy",
      available: true,
      thumbnail: root + "/static/properties/green.jpg",
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
      upgrades: [
        {
          title: "Tesla Package",
          price: "$50,000",
          includes:
            "Includes 2 Tesla Power walls and photovoltic roofing panels.",
        },
      ],
    },
    {
      id: 4,
      type: "buy",
      available: true,
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
      upgrades: [
        {
          title: "Tesla Package",
          price: "$50,000",
          includes:
            "Includes 2 Tesla Power walls and photovoltic roofing panels.",
        },
      ],
    },
    {
      id: 5,
      type: "rent",
      available: true,
      thumbnail: root + "/static/properties/ocean.jpg",
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
      upgrades: [
        {
          title: "Tesla Package",
          price: "$50,000",
          includes:
            "Includes 2 Tesla Power walls and photovoltic roofing panels.",
        },
      ],
    },
    {
      id: 6,
      type: "rent",
      available: false,
      thumbnail: root + "/static/properties/solar.jpg",
      link:
        "https://honolulu.craigslist.org/oah/apa/d/waianae-brand-new-ocean-front-duplex/6816475203.html",
      photos: [],
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
      upgrades: [
        {
          title: "Tesla Package",
          price: "$50,000",
          includes:
            "Includes 2 Tesla Power walls and photovoltic roofing panels.",
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

function getProperty(id) {
  var properties = getProperties();
  return properties.filter(function(property) {
    return property.id === id;
  })[0];
}
