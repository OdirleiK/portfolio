const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeteScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
        element.classList.add(animationClass);
    } else {
        element.classList.remove(animationClass);
    }
  })
}
animeteScroll();

window.addEventListener('scroll', function() {
    animeteScroll();
})