function printMediaItems() {
  var mediaItems = getMedia();
  var container = document.getElementById("media-container");
  var innerHTML = "";

  mediaItems.map(function(item) {
    var i = "<div class='media-item card shadow-sm'>";

    if (item.type === "article") {
      i += "<img src='" + item.media.src + "' alt='" + item.media.alt + "'/>";
    } else if (item.type === "video") {
      i +=
        "<iframe width='100%' height='200px' src='" +
        item.media.src +
        "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen ></iframe>";
    }

    i +=
      "<div class='card-body'><h3>" +
      item.title +
      "</h3><p>" +
      item.description.substring(0, 160) +
      "..." +
      "</p></div>";
    i +=
      "<div class='card-footer'><a href='" +
      item.link.href +
      "' target='_blank'>" +
      item.link.text +
      "</a></div>";
    i += "</div>";

    innerHTML += i;
  });

  container.innerHTML += innerHTML;
}

printMediaItems();
