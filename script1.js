let lastScrollTop = 0;
const resumeButton = document.querySelector('.resume');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        resumeButton.style.opacity = '0';
    } else {
        // Scrolling up
        resumeButton.style.opacity = '1'; // Show the button
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
