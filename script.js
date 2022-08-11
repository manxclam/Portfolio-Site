// FADE
// reference to html element
const fadeEl = document.querySelector('.fade');

let hasScrolled = false;
window.addEventListener('scroll', () => {
    if (!hasScrolled) {
        fadeEl.style.opacity = '0.5';
        hasScrolled = true;
    }
});

// FILTERS
const filtersEl = document.querySelector('.filters');
// const projectEl1 = document.querySelector('.project:nth-child(1)');
// const projectEl2 = document.querySelector('.project:nth-child(2)');
// const projectEl3 = document.querySelector('.project:nth-child(3)');
// const projectEl4 = document.querySelector('.project:nth-child(4)');
// const projectEl5 = document.querySelector('.project:nth-child(5)');
// const projectEl6 = document.querySelector('.project:nth-child(6)');

filtersEl.addEventListener('click', (e) => {
    // remove fade
    fadeEl.style.opacity = '0.1';

    // Removes highlight on filters once new one is selected
    document.querySelector('.filter-button--active').classList.remove('filter-button--active');
    e.target.classList.add('filter-button--active');
});