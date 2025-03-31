const searchBar = document.querySelector('#search-bar');
const searchButton = document.querySelector('#search-button');
const headings = document.querySelectorAll('h2');
const paragraphs = document.querySelectorAll('p');

function highlightMatches(searchTerm) {
  headings.forEach(heading => {
    const headingText = heading.textContent.toLowerCase();

    if (headingText.includes(searchTerm)) {
      heading.classList.add('highlight');
    } else {
      heading.classList.remove('highlight');
    }
  });

  paragraphs.forEach(paragraph => {
    const paragraphText = paragraph.textContent.toLowerCase();

    // Remove previous highlight
    const highlighted = paragraph.querySelectorAll('.highlight');
    highlighted.forEach(node => {
      const parent = node.parentNode;
      parent.replaceChild(node.firstChild, node);
      parent.normalize();
    });

    if (paragraphText.includes(searchTerm)) {
      paragraph.innerHTML = paragraph.innerHTML.replace(
        new RegExp(searchTerm, 'gi'),
        `<span class="highlight">$&</span>`
      );
    } else {
      paragraph.innerHTML = paragraph.innerHTML.replace(
        /<span class="highlight">|<\/span>/gi,
        ''
      );
    }
  });
}

searchButton.addEventListener('click', () => {
  const searchTerm = searchBar.value.toLowerCase();
  highlightMatches(searchTerm);
});

searchBar.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    const searchTerm = searchBar.value.toLowerCase();
    highlightMatches(searchTerm);
  }
});


