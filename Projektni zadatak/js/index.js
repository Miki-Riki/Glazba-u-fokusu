const Menu = document.querySelector('.menu i');
const Links = document.querySelector('nav ul');


Menu.addEventListener('click', () => {
  Links.classList.toggle('active');
})


const icon = document.querySelector('.menu i');
icon.addEventListener('click', function() {
	icon.classList.toggle('rotate');
});
