function renderPropertyThumbnailCard(type) {
  var forSale = getProperties(type);
  var cardContainer = document.getElementById("card-container");

  forSale.map(function(p) {
    var pricetag = p.type === "rent" ? "Rent for " : "Starting at ";

    var link = p.link
      ? "<a class='btn btn-success' href='" +
        p.link +
        "' target='_blank'>View Property Listing</a>"
      : "<button onclick='showPropertyModal(" +
        p.id +
        ")' class='btn btn-success'>View Property Listing</button>";

    pricetag += p.price;
    cardContainer.innerHTML +=
      "<div class='card shadow-sm'><img src='" +
      p.thumbnail +
      "' class='card-img-top' alt='" +
      p.description +
      "' /><div class='card-body'><h5 class='card-title'>" +
      p.title +
      "</h5><p class='card-text' style='font-size: 90%;'>" +
      p.description +
      "</p>" +
      link +
      "</div><div class='card-footer text-muted'>" +
      pricetag +
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

  c +=
    "<div class='inner-small'><button id='close-btn' onclick='toggleModal()'><i class='fas fa-times'></i></button>";

  c += "<img class='main-img' src='" + decodeURI(p.thumbnail) + "'/>";

  if (!p.available) {
    var alternate_text = p.alternate_text || "Coming Soon!";
    c +=
      "<div class='modal-body'><h1 class='hook'>" +
      p.title +
      "</h1><h2 class='hook'>" +
      alternate_text +
      "</h2></div>";
  } else {
    c += "<div class='modal-body'>";

    c += "<h1 class='hook'>" + p.title + "</h1>";
    c += "<h2 class='line'>" + p.description + "</h2>";
    c += "<h2 class='line'>Price: " + p.price + "</h2>";
    c += "<div class='flex-box'>";
    c += "<div class='feature-contaier'>";
    c += "<h3>Features</h3>";
    c += "<ul>";
    p.features.map(function(feature) {
      c += "<li>" + feature + "</li>";
    });
    c += "</ul>";
    c += "</div>"; // close FEATURE CONTAINER
    c += "<div class='upgrades-contaier'>";
    if (p.upgrades) {
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

    c +=
      "<a target='_blank' href='mailto:greenhomes808@gmail.com?subject=" +
      p.title +
      " Tour' class='btn btn-primary'>Schedule Tour</a>";
    c += "<a href='tel:+18085515302' class='btn btn-secondary'>Call Today!</a>";
    c +=
      "<a href='https://5182576364.mortgage-application.net/WebApp/Start.aspx' target='_blank' class='btn btn-info'>Lendor Application</a>";

    c += "</div>"; // end button container
    c += "</div>"; // close modal body
    c += "</div>"; // close inner-small
  }

  m.innerHTML = c;
}
