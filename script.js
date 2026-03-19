
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

if (hamburger && navbar) {

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navbar.classList.toggle('open');
    });

    document.querySelectorAll('.navbar .nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navbar.classList.remove('open');
        });
    });

    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navbar.classList.remove('open');
        }
    });
}

(function messageBienvenue() {
    const heure = new Date().getHours();
    let message = '';

    if (heure >= 5 && heure < 12) {
        message = ' Bonjour ! Bienvenue sur mon portfolio.';
    } else if (heure >= 12 && heure < 18) {
        message = ' Bon après-midi ! Bienvenue sur mon portfolio.';
    } else if (heure >= 18 && heure < 22) {
        message = ' Bonsoir ! Bienvenue sur mon portfolio.';
    } else {
        message = ' Bonne nuit ! Merci de visiter mon portfolio.';
    }

    const el = document.getElementById('bienvenue-msg');
    if (el) {
        el.textContent = message;
    }
})();

const revealElements = document.querySelectorAll(
    'section, .competence1, .projet1, .propos-text p, #image, #images'
);

revealElements.forEach(el => {
    el.classList.add('reveal');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 60);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

revealElements.forEach(el => observer.observe(el));


const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar .nav-links li a');

const activateLink = () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        link.style.background = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--orange)';
            link.style.background = 'rgba(255, 107, 43, 0.10)';
        }
    });
};

window.addEventListener('scroll', activateLink);
activateLink();


const header = document.querySelector('.header');

if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            header.style.boxShadow = '0 4px 32px rgba(124, 58, 237, 0.18)';
        } else {
            header.style.boxShadow = '0 2px 24px rgba(124, 58, 237, 0.07)';
        }
    });
}


document.querySelectorAll('.competence1').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('i');
        if (icon) {
            icon.style.transform = 'scale(1.2) rotate(-5deg)';
        }
    });
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('i');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});


const footerParagraphs = document.querySelectorAll('footer p');
footerParagraphs.forEach(p => {
    if (p.textContent.includes('2025')) {
        p.textContent = p.textContent.replace('2025', new Date().getFullYear());
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

const backToTop = document.getElementById('retour');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});