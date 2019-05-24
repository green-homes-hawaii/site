function getProperties(type) {
  this.type = type || null;

  var root = getProjectRoot();

  var properties = [
    {
      id: 1,
      type: "buy",
      available: false,
      featured: false,
      links: [
        {
          href:
            "https://drive.google.com/open?id=0B8RnZnIJqnmQT29ublVhRUhmWnBIajE4VVhKLXpuQkVWTS1J",
          text: "More Information",
        },
      ],
      thumbnail: root + "/static/properties/1/0.jpg",
      photos: [],
      title: "OCEAN POINTE: 91-1268 Kaiopua St. | Ewa Beach",
      description:
        "Extremely energy efficient = low monthly bills. LED lighting, dual flush toilets, dual pane windows, and so much more",
      price: "$789,000",
      location: "Ocean Pointe",
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
      featured: true,
      links: [
        {
          href:
            "https://honolulu.craigslist.org/oah/reo/d/waianae-single-family-home-brand-new/6805560817.html",
          text: "More Information",
        },
        {
          href: "https://player.vimeo.com/video/336661377",
          text: "Video Tour",
          class: "warning",
        },
      ],
      thumbnail: root + "/static/properties/2/1.jpg",
      photos: [
        root + "/static/properties/2/1.jpg",
        root + "/static/properties/2/2.jpg",
        root + "/static/properties/2/3.jpg",
        root + "/static/properties/2/4.jpg",
        root + "/static/properties/2/5.jpg",
        root + "/static/properties/2/6.jpg",
        root + "/static/properties/2/7.jpg",
        root + "/static/properties/2/8.jpg",
        root + "/static/properties/2/9.jpg",
        root + "/static/properties/2/10.jpg",
        root + "/static/properties/2/11.jpg",
        root + "/static/properties/2/12.jpg",
      ],
      title: "Green Homes at Hanalei",
      description:
        "Extremely energy efficient = low monthly bills. LED lighting, dual flush toilets, dual pane windows, and so much more!",
      price: "$599,950",
      location: "84-808 Hanalei Street",
      footnote:
        "Upgrades included throughout including custom flooring, custom tile, matching granite counters, and solid wood cabinets. Pictures are representative of floor plan and finishes but not of the exact house.",
      features: [
        "Gated Community",
        "No HOA Fees!",
        "10 minute walk to the Beach!",
        "4 Bedroom, 3 Bathroom",
        "Open Floor Plan",
        "2 Car Enclosed Garage",
        "Liftmaster Garage Door Opener",
        "Granite Countertops",
        "Dual Pane Windows by Pella",
        "Certainteed Roof, 25 year Warranty",
        "LED Lighting",
        "Ceiling Fans",
        "Split AC",
        "Solid Wood Cabinetry",
        "Insinkerator Garbage Disposal",
        "Samsung Appliances",
        "Premium Paint",
        "Heat Exchanger Water Heater",
        "Vinyl Plank Floors",
        "Ceramic Tile Floors",
        "Premium Bathroom Fixtures",
        "Low Flow Toilets",
        "6’ Vinyl Fencing",
        "Xeriscaped Front Yard",
        "Large Fenced Side Yard",
      ],
      upgrades: [getUpgrade("tesla")],
    },
    {
      id: 3,
      type: "buy",
      available: true,
      thumbnail: root + "/static/properties/3/0.jpg",
      photos: [
        root + "/static/properties/3/0.jpg",
        root + "/static/properties/3/1.jpg",
        root + "/static/properties/3/2.jpg",
        root + "/static/properties/3/3.jpg",
        root + "/static/properties/3/4.jpg",
        root + "/static/properties/3/5.jpg",
        root + "/static/properties/3/6.jpg",
        root + "/static/properties/3/7.jpg",
        root + "/static/properties/3/8.jpg",
        root + "/static/properties/3/9.jpg",
        root + "/static/properties/3/10.jpg",
        root + "/static/properties/3/11.jpg",
        root + "/static/properties/3/12.jpg",
      ],
      title: "Pokai Bay Oceanfront Dreams",
      links: [
        {
          href:
            "https://drive.google.com/file/d/0B8BYLcIsfATqckQ4c1NMVG4zMko0MWhqbVY0Rzc4dHpxWng4/view?usp=sharing",
          text: "More Information",
        },
      ],
      description:
        "Dreaming of sunsets from your lanai or swimming with dolphins? Swim, surf, SUP, paddle, fish, all are steps away when you live on Pokai Bay. Jump in the water for a surf while your kids are swimming near the lifeguard stand. Enjoy this large custom home featuring 5 large bedrooms, 3 full baths + 1/2 bath in addition to a second large living room with wet bar. The 2 master suites make hosting family and guests seamless. Want to combat global warming? This smart home is solar powered, with a 10KW system, 2 Tesla Power walls and full Smart Home Automation!!! Must see and feel the quality and location.",
      price: "$1.195M",
      location: "85-065 Waianae Valley Road",
      footnote: "",
      features: [],
      upgrades: [],
    },
    {
      id: 4,
      type: "",
      available: false,
      thumbnail: root + "",
      title: "",
      description: "",
      price: "",
      photos: [],
      location: "",
      footnote: "",
      features: [],
      upgrades: [],
    },
    {
      id: 5,
      type: "rent",
      available: false,
      thumbnail: root + "/static/home-images/ocean.jpg",
      links: [
        {
          href:
            "https://honolulu.craigslist.org/oah/apa/d/waianae-pokai-bay-ocean-view-duplex-home/6820408261.html",
          text: "More Information",
        },
      ],
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
      available: false,
      thumbnail: root + "/static/properties/6/img/4.jpg",
      links: [
        {
          href:
            "https://honolulu.craigslist.org/oah/apa/d/waianae-brand-new-ocean-front-duplex/6816475203.html",
          text: "More Information",
        },
      ],
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
