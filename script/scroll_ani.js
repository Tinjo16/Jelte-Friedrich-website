'use strict';

// Observer / Performance
const selecEl = () => {

    // Elemente Ansprechen
    const elements = {};
    elements.vid = document.querySelectorAll('video');
    elements.span = document.querySelectorAll('h2 span');
    elements.txt_1 = document.querySelectorAll('h3');
    elements.txt_2 = document.querySelectorAll('.beschreibung');
    elements.txt_3 = document.querySelectorAll('.song');
    console.log(elements);

    // Elemente Speichern
    const allElements = [
        ...elements.vid, ...elements.span, 
        ...elements.txt_1, ...elements.txt_2, 
        ...elements.txt_3
    ];
    window.elements = allElements;
}

// klassen verteilen
const handleclass = entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.tagName === 'VIDEO') {
                entry.target.classList.add('showV');
            } else if (entry.target.tagName === 'SPAN') {
                entry.target.classList.add('showS');
            } else if (entry.target.tagName === 'H3') {
                entry.target.classList.add('showT1');
            } else if (entry.target.matches('.beschreibung')) {
                entry.target.classList.add('showT2');
            } else if (entry.target.matches('.song')) {
                entry.target.classList.add('showT3');
            }
        } else {
            if (entry.target.tagName === 'VIDEO') {
                entry.target.classList.remove('showV');
            } else if (entry.target.tagName === 'SPAN') {
                entry.target.classList.remove('showS');
            } else if (entry.target.tagName === 'H3') {
                entry.target.classList.remove('showT1');
            } else if (entry.target.matches('.beschreibung')) {
                entry.target.classList.remove('showT2');
            } else if (entry.target.matches('.song')) {
                entry.target.classList.remove('showT3');
            }
        }
    });
};


const initObserver = () => {
    const viewportChecker = new IntersectionObserver(handleclass);

    window.elements.forEach(el => {
        viewportChecker.observe(el);
    });
}