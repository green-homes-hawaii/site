function renderPropertyThumbnailCard(type) {
  var forSale = getProperties(type);
  var cardContainer = document.getElementById("card-container");

  forSale.map(function(property) {
    cardContainer.innerHTML +=
      "<div class='card'><img src='" +
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

function toggleModal(modal) {
  var m = modal || document.getElementById("modal");

  m.innerHTML = "";

  if (m.classList.contains("shown")) {
    m.classList.remove("shown");
  } else {
    m.classList.add("shown");
  }
}

function showPropertyModal(property) {
  var modal = document.getElementById("modal");
  toggleModal(modal);

  if (!property) {
    modal.innerHTML =
      "<div class='alert alert-info' role='alert'>This property does not exist...</div>";
  }

  modal.innerHTML +=
    "<div class='modal-title'><button onclick='toggleModal()'><i class='fas fa-times'></i></button>" +
    property.title +
    "</div>";

  modal.innerHTML += "<div class='modal-content'>Hello</div>";
}
