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
const projectEl1 = document.querySelector('.project:nth-child(1)');
const projectEl2 = document.querySelector('.project:nth-child(2)');
const projectEl3 = document.querySelector('.project:nth-child(3)');
const projectEl4 = document.querySelector('.project:nth-child(4)');
const projectEl5 = document.querySelector('.project:nth-child(5)');
const projectEl6 = document.querySelector('.project:nth-child(6)');
const rootEl = document.querySelector(':root');

filtersEl.addEventListener('click', (e) => {
    // remove fade
    fadeEl.style.opacity = '0.1';

    // Removes active class with highlight on filters once new one is selected
    document.querySelector('.filter-button--active').classList.remove('filter-button--active');
    e.target.classList.add('filter-button--active');

    // change image opacities
    rootEl.style.setProperty('--default-opacity', '0.4');
    rootEl.style.setProperty('--hover-opacity', '0.3');

    // reorganize grid
    // select button clicked text
    const filterText = e.target.textContent;

    if (filterText === 'All') {
        projectEl1.style.opacity = '1.0';
        projectEl1.style.transform = 'scale(1.0)';
        projectEl2.style.opacity = '1.0';
        projectEl2.style.transform = 'scale(1.0)';
        projectEl3.style.opacity = '1.0';
        projectEl3.style.transform = 'scale(1.0)';
        projectEl4.style.opacity = '1.0';
        projectEl4.style.transform = 'scale(1.0)';
        projectEl5.style.opacity = '1.0';
        projectEl5.style.transform = 'scale(1.0)';
        projectEl6.style.opacity = '1.0';
        projectEl6.style.transform = 'scale(1.0)';        
    } else if (filterText === 'Front-End') {
        // hide irrelevent cards
        projectEl1.style.opacity = '0.0';
        projectEl1.style.transform = 'scale(0.0)';
        projectEl2.style.opacity = '0.0';
        projectEl2.style.transform = 'scale(0.0)';
        projectEl5.style.opacity = '0.0';
        projectEl5.style.transform = 'scale(0.0)';
        projectEl6.style.opacity = '0.0';
        projectEl6.style.transform = 'scale(0.0)';

        // relevent cards to top
        projectEl3.style.transform = 'translateX(-650px)';
        projectEl3.style.opacity = '1.0';
        projectEl4.style.transform = 'translate(325px, -502px)';
        projectEl4.style.opacity = '1.0';
    } else if (filterText === 'C++') {
        // hide irrelevent cards
        projectEl3.style.opacity = '0.0';
        projectEl3.style.transform = 'scale(0.0)';
        projectEl2.style.opacity = '0.0';
        projectEl2.style.transform = 'scale(0.0)';
        projectEl5.style.opacity = '0.0';
        projectEl5.style.transform = 'scale(0.0)';
        projectEl4.style.opacity = '0.0';
        projectEl4.style.transform = 'scale(0.0)';

        // relevent cards to top - no movement for projectEl1
        projectEl1.style.transform = 'scale(1.0)';
        projectEl1.style.opacity = '1.0';
        projectEl6.style.transform = 'translate(-325px, -502px)';
        projectEl6.style.opacity = '1.0';
    } else if (filterText === 'C# / .Net') {
        // hide irrelevent cards
        projectEl1.style.opacity = '0.0';
        projectEl1.style.transform = 'scale(0.0)';
        projectEl3.style.opacity = '0.0';
        projectEl3.style.transform = 'scale(0.0)';
        projectEl4.style.opacity = '0.0';
        projectEl4.style.transform = 'scale(0.0)';
        projectEl6.style.opacity = '0.0';
        projectEl6.style.transform = 'scale(0.0)';

        // relevent cards to top
        projectEl2.style.transform = 'translateX(-325px)';
        projectEl2.style.opacity = '1.0';
        projectEl5.style.transform = 'translateY(-359px)';
        projectEl5.style.opacity = '1.0';
    }
});

