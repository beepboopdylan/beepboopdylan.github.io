let lastScroll = 0;

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScroll) {
    navbar.classList.add('hidden');
  } else {
    navbar.classList.remove('hidden');
  }
  lastScroll = scrollTop <= 0 ? 0 : scrollTop;

});




