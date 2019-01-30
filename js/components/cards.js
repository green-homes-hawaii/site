function renderPropertyThumbnailCard(type) {
  var forSale = getProperties(type);
  var cardContainer = document.getElementById("forSaleContainer");

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
      "</p><a href='#' class='btn btn-success'>Schedule a Touring!</a></div><div class='card-footer text-muted'>" +
      property.price +
      "</div></div>";
  });
}
