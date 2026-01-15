// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Highlight active navigation link
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY + 100;

    document.querySelectorAll('section').forEach(section => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.clientHeight;
        let sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`a[href="#${sectionId}"]`)?.classList.add('active');
        }
    });
});

// Add active class styling
const style = document.createElement('style');
style.innerHTML = `
    .nav-link.active {
        color: #2563eb;
        border-bottom: 2px solid #2563eb;
    }
`;
document.head.appendChild(style);

// Animation on scroll for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.skill-category, .project-card, .education-card, .contact-item').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Mobile menu toggle (for future enhancement)
console.log('Portfolio loaded successfully!');
