const portfolioButton = document.getElementById('portfolio-button');
const portfolioContent = document.getElementById('portfolio-content');
const dropdownIcon = document.querySelector('.dropdown-icon');
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

portfolioButton.addEventListener('click', (event) => {
    event.preventDefault();
    const isVisible = portfolioContent.style.display === 'block';
    portfolioContent.style.display = isVisible ? 'none' : 'block';
    dropdownIcon.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(180deg)';
});

document.addEventListener('click', (event) => {
    if (!portfolioButton.contains(event.target)) {
        portfolioContent.style.display = 'none';
        dropdownIcon.style.transform = 'rotate(0deg)';
    }
});

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.innerHTML = '&#10005;'; // Unicode for cancel icon
    } else {
        mobileMenu.innerHTML = '<span class="bar"></span><span class="bar"></span><span class="bar"></span>';
    }
});
