(function() {
  var callPhoneLinks = document.getElementsByClassName("phone-action");

  for (var i = 0; i < callPhoneLinks.length; i++) {
    callPhoneLinks[i].addEventListener("click", handlePhoneLinkClick);
  }
})();

function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

function handlePhoneLinkClick() {
  if (isMobileDevice()) {
    return;
  } else {
    window.alert("Phone Number for Green Homes Hawaii: (808) 551 5302");
  }
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
