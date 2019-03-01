function renderLink(p) {
  if (p.preview) {
    return "<button class='btn btn-success' disabled>Coming soon!</button>";
  } else if (p.link) {
    return (
      "<a class='btn btn-success' href='" +
      p.link +
      "' target='_blank'>View Property Listing</a>"
    );
  } else {
    "<button onclick='showPropertyModal(" +
      p.id +
      ")' class='btn btn-success'>View Property Listing</button>";
  }
}

function renderPropertyThumbnailCard(type) {
  var forSale = getProperties(type);
  var cardContainer = document.getElementById("card-container");

  forSale
    .filter(function(property) {
      console.log(property);
      return property.available;
    })
    .map(function(p) {
      var pricetag = p.type === "rent" ? "Rent for " : "Starting at ";
      var link = renderLink(p);

      var featuredClass = p.featured && "featured";

      cardContainer.innerHTML +=
        "<div class='card shadow-sm " +
        featuredClass +
        "'><img src='" +
        p.thumbnail +
        "' class='card-img-top' alt='" +
        p.description +
        "' /><div class='card-body'><h5 class='card-title'>" +
        p.title +
        "</h5><p class='card-text' style='font-size: 90%;'>" +
        p.description.substring(0, 160) +
        "..." +
        "</p>" +
        link +
        "</div><div class='card-footer text-muted'>" +
        p.price +
        "</div></div>";
    });
}

function showPropertyModal(id) {
  var m = document.getElementById("modal");
  m.classList.add("property");
  toggleModal(m);

  var p = getProperty(id);
  var c = "";

  if (!p) {
    m.innerHTML =
      "<div class='alert alert-info' role='alert'>This property does not exist...</div>";
  }
  c += "<div class='inner-small'>";

  c +=
    "<div class='modal-title'><h1>" +
    p.title +
    "</h1><button id='close-btn' onclick='toggleModal()'><i class='fas fa-times'></i></button></div>";

  c += "<div class='modal-body'>";
  if (p.photos.length) {
    c +=
      "<div id='carousel' class='carousel slide' data-ride='carousel'><div class='carousel-inner'>";
    // loop photos

    p.photos.map(function(photo, i) {
      var active = i === 0 ? "active" : "";
      c +=
        "<div class='carousel-item " +
        active +
        "'><img class='d-block w-100' src='" +
        photo +
        "'></div>";
    });
    c +=
      "</div><a class='carousel-control-prev' href='#carousel' role='button' data-slide='prev'><span class='carousel-control-prev-icon' aria-hidden='true'></span><span class='sr-only'>Previous</span></a><a class='carousel-control-next' href='#carousel' role='button' data-slide='next'><span class='carousel-control-next-icon' aria-hidden='true'></span><span class='sr-only'>Next</span></a></div>";
  } else {
    c += "<img class='main-img' src='" + decodeURI(p.thumbnail) + "'/>";
  }

  c += "<div class='modal-body__text'>";
  if (!p.available) {
    var alternate_text = p.alternate_text || "Coming Soon!";
    c +=
      "<h1 class='hook'>" +
      p.title +
      "</h1><h2 class='hook'>" +
      alternate_text +
      "</h2></div>";
  } else {
    var pricetag = p.type === "rent" ? "Rent for " : "Starting at ";

    c += "<h2 class='line'>" + p.description + "</h2>";
    c += "<h2 class='line'>" + pricetag + " " + p.price + ".</h2>";
    c += "<div class='flex-box'>";
    c += "<div class='feature-contaier'>";
    if (p.features.length) {
      c += "<h3>Features</h3>";
      c += "<ul>";
      p.features.map(function(feature) {
        c += "<li>" + feature + "</li>";
      });
      c += "</ul>";
      c += "</div>"; // close FEATURE CONTAINER
    }
    c += "<div class='upgrades-contaier'>";
    if (p.upgrades.length) {
      c += "<h3>Upgrades</h3>";
      c += "<ul>";
      p.upgrades.map(function(feature) {
        c +=
          "<li>" +
          feature.title +
          ": " +
          feature.includes +
          " - " +
          feature.price +
          "</li>";
      });
      c += "</ul>";
      c += "</div>"; // close UPGRADES CONTAINER
    }
    c += "</div>"; // close features & upgrades
    c += p.footnote ? "<p class='small'>* " + p.footnote + "</p>" : "";
    c += "<div class='button-container'>";

    if (p.link) {
      c +=
        "<a target='_blank' href='" +
        p.link +
        "' class='btn btn-success'>More Information</a>";
    }

    c +=
      "<a target='_blank' href='mailto:greenhomes808@gmail.com?subject=" +
      p.title +
      " Tour' class='btn btn-primary'>Schedule Tour</a>";
    c += "<a href='tel:+18085515302' class='btn btn-secondary'>Call Today!</a>";
    c +=
      "<a href='https://simplenexus.com/borrower/signup/meena.na@elementmortgage.com' target='_blank' class='btn btn-info'>Lendor Application</a>";

    c += "</div>"; // end button container
    c += "<div>";
    c += "</div>"; // close modal body
    c += "</div>"; // close inner-small
  }

  m.innerHTML = c;
}
