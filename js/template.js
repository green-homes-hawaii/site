(function renderHeader() {
	var links = [
		{ href: './index.html', text: 'Home' },
		{ href: './pages/buy.html', text: 'Buy' },
		{ href: './pages/rent.html', text: 'Rent' },
		{ href: './pages/consult.html', text: 'Get In Touch' },
	];

	document.getElementById('header-links').innerHTML =
		"<ul class='navbar-nav ml-auto>'" +
		links.map(function(link) {
			renderHeaderLink(link);
		}) +
		'</ul>';
})();

function renderHeaderLink(link) {
	var active = window.location.pathname.includes(link.text);
	return (
		"<li class='nav-item " +
		active +
		"'><a class='nav-link' href='" +
		link.href +
		"'>" +
		link.text +
		'/a></li>'
	);
}
