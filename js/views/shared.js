function toggleModal(modal) {
  var m = modal || document.getElementById("modal");
  var body = document.getElementsByTagName("body")[0];

  m.innerHTML = "";

  if (m.classList.contains("shown")) {
    m.classList.remove("shown", "bounceIn", "fadeOut");
    body.classList.remove("noScroll");
  } else {
    m.classList.add("bounceIn", "shown");
    body.classList.add("noScroll");
  }
}

function getProjectRoot() {
  // customized to Austin Witherow dev env
  if (window.location.href.includes("file://")) {
    return "file:///Users/austinwitherow/dev/clients/green-homes-hawaii/site";
  } else {
    return "https://green-homes-hawaii.github.io/site";
  }
}
