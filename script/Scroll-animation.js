/* js code von 
https://www.sliderrevolution.com/resources/css-animations-on-scroll/ */


const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('item-animation');
    }
  });
});

const viewbox = document.querySelectorAll('.animation');
viewbox.forEach(item => {
  observer.observe(item);
});

