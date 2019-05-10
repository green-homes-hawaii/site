function catchPhoneCalls(e) {
  var os = window.navigator.oscpu;

  if (os.contains("win" || "lin")) {
    e.preventDefault();
    window.confirm("Please give us a call at 808-551-5302!");
  }
}

// remove empty key/value pairs from objects
function removeEmpties(obj) {
  var newObj = {};
  Object.keys(obj).forEach(function(prop) {
    if (obj[prop]) {
      newObj[prop] = obj[prop];
    }
  });
  return newObj;
}

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
