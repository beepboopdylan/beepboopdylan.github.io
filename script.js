/*
let lastScrollTop = 0;
const homeButton = document.querySelector('.home-button'); // Select the home button

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        homeButton.style.opacity = '0';
    } else {
        // Scrolling up
        homeButton.style.opacity = '1'; // Show the button
    }
    // lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
*/
//scroll back up to top!!
const scroll_up = document.getElementById("topButton");

window.onscroll = function() {
   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scroll_up.classList.add("show");
   } else {
      scroll_up.classList.remove("show");
   }
};

scroll_up.addEventListener('click', function() {
  window.scrollTo(0, 0);
});

