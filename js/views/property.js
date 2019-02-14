function renderPropertyThumbnailCard(type) {
  var forSale = getProperties(type);
  var cardContainer = document.getElementById("card-container");

  forSale.map(function(property) {
    cardContainer.innerHTML +=
      "<div class='card shadow-sm'><img src='" +
      property.thumbnail +
      "' class='card-img-top' alt='" +
      property.description +
      "' /><div class='card-body'><h5 class='card-title'>" +
      property.title +
      "</h5><p class='card-text'>" +
      property.description +
      "</p><button onclick='showPropertyModal(" +
      property +
      ")' class='btn btn-success'>Schedule a Touring!</button></div><div class='card-footer text-muted'>" +
      property.price +
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
  c += "<div class='modal-body'>";

  c += "<h1 class='hook'>" + p.title + "</h1>";
  c += "<h2 class='line'>" + p.description + "</h2>";
  c += "<h2 class='line'>Price: " + p.price + "</h2>";
  c += "<h3>Features</h3>";
  c += "<ul>";
  p.features.map(function(feature) {
    c += "<li>" + feature + "</li>";
  });
  c += "</ul>";
  c += "<p class='small'>* " + p.footnote + "</p>";
  c += "<div class='button-container'>";

  c +=
    "<a target='_blank' href='mailto:greenhomes808@gmail.com?subject=" +
    p.title +
    " Tour' class='btn btn-primary'>Schedule Tour</a>";
  c += "<a href='tel:+6494461709' class='btn btn-secondary'>Call Today!</a>";
  c +=
    "<a href='https://5182576364.mortgage-application.net/WebApp/Start.aspx' target='_blank' class='btn btn-info'>Loans</a>";

  c += "</div>"; // end button container
  c += "</div>"; // close modal body
  c += "</div>"; // close inner-small

  m.innerHTML = c;
}
