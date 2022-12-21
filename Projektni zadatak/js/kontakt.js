$(window).scroll(function() {
  $("header").css("opacity", 1 - $(window).scrollTop() / 500);
});


const Menu = document.querySelector('.menu i');
const Links = document.querySelector('nav ul');


Menu.addEventListener('click', () => {
  Links.classList.toggle('active');
})


const icon = document.querySelector('.menu i');
icon.addEventListener('click', function() {
	icon.classList.toggle('rotate');
});


let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("SRETAN BOŽIĆ I NOVA GODINA");
});
  

