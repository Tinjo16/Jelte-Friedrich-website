  // Select the navigation element
  const nav = document.querySelector('nav');

  // Get the initial scroll position
  let prevScrollPos = window.pageYOffset;

  // Add a scroll event listener
  window.addEventListener('scroll', () => {
    // Get the current scroll position
    const currentScrollPos = window.pageYOffset;

    // Check if the user has scrolled down
    if (prevScrollPos > currentScrollPos) {
      // If the user has scrolled up, show the navigation
      nav.style.top = '0';
    } else {
      // If the user has scrolled down, hide the navigation
      nav.style.top = `-${nav.offsetHeight}px`;
    }

    // Set the previous scroll position to the current scroll position
    prevScrollPos = currentScrollPos;
  });

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").classList.remove("navbar-hidden");
    } else {
      document.getElementById("navbar").classList.add("navbar-hidden");
    }
    prevScrollpos = currentScrollPos;
  }

// nav wurde erstellt von chatgpt
