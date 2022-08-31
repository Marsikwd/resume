function toggleMenu() {
	const menuToggle = document.querySelector('.toggle');
	const sidebar = document.querySelector('.sidebar');
	menuToggle.classList.toggle('active');
	sidebar.classList.toggle('active');
}

let linkWeb = document.querySelector('.web');

linkWeb.addEventListener('click', function (e) {
	e.preventDefault();
	window.open('https://marsikwd.github.io/Web/');
})

let linkGame = document.querySelector('.game');

linkGame.addEventListener('click', function (e) {
	e.preventDefault();
	window.open('https://marsikwd.github.io/Game-City/');
})

let linkClovery = document.querySelector('.clovery');

linkClovery.addEventListener('click', function (e) {
	e.preventDefault();
	window.open('https://marsikwd.github.io/Clovery/');
})

let linkRest = document.querySelector('.rest');

linkRest.addEventListener('click', function (e) {
	e.preventDefault();
	window.open('https://marsikwd.github.io/Restoran/');
})

let linkMarcy = document.querySelector('.Marcy');

linkMarcy.addEventListener('click', function (e) {
	e.preventDefault();
	window.open('https://marsikwd.github.io/Mercy/');
})