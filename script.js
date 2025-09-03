// Smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function() {
    // Handle profile image loading
    const profileImg = document.getElementById('profileImg');
    const fallbackIcon = document.getElementById('fallbackIcon');
    
    if (profileImg) {
        profileImg.onerror = function() {
            this.style.display = 'none';
            if (fallbackIcon) {
                fallbackIcon.style.display = 'flex';
            }
        };
        
        profileImg.onload = function() {
            if (fallbackIcon) {
                fallbackIcon.style.display = 'none';
            }
        };
    }
    
    // Add cosmic particle effects
    createCosmicParticles();
    
    // Add smooth scrolling animation
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation to skill items on scroll
    const skillItems = document.querySelectorAll('.skill-item');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    skillItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });

    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Add hover effect to social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add typing animation to tagline
    const tagline = document.querySelector('.tagline');
    const originalText = tagline.textContent;
    tagline.textContent = '';
    
    let i = 0;
    const typeSpeed = 100;
    
    function typeWriter() {
        if (i < originalText.length) {
            tagline.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, typeSpeed);
        }
    }
    
    setTimeout(typeWriter, 1000);

    // Add pulse animation to avatar
    const avatar = document.querySelector('.avatar');
    setInterval(() => {
        avatar.style.transform = 'scale(1.05)';
        setTimeout(() => {
            avatar.style.transform = 'scale(1)';
        }, 200);
    }, 3000);

    // Add special effects for individual sections
    const discordSection = document.querySelector('.discord-section');
    const youtubeSection = document.querySelector('.youtube-section');
    
    [discordSection, youtubeSection].forEach((section, index) => {
        if (section) {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            section.style.transition = 'opacity 1s ease, transform 1s ease';
            
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, (index + 3) * 300); // Start after other sections
        }
    });

    // Add click tracking for social links (for analytics if needed)
    socialLinks.forEach(link => {
        link.addEventListener('click', function() {
            const platform = this.querySelector('span').textContent;
            console.log(`Clicked on ${platform} link`);
        });
    });

    // Add parallax effect to hero section with cosmic twist
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.3;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add loading animation with cosmic theme
    const body = document.body;
    body.style.opacity = '0';
    body.style.transition = 'opacity 1.5s ease-in-out';
    
    setTimeout(() => {
        body.style.opacity = '1';
        // Add welcome cosmic effect
        showCosmicWelcome();
    }, 100);
});

// Create floating cosmic particles
function createCosmicParticles() {
    const particleCount = 30;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'cosmic-particle';
        particle.style.cssText = `
            position: fixed;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: ${['#1976d2', '#42a5f5', '#64b5f6', '#90caf9', '#bbdefb'][Math.floor(Math.random() * 5)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.7;
            box-shadow: 0 0 10px currentColor;
        `;
        
        document.body.appendChild(particle);
        particles.push({
            element: particle,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2
        });
    }
    
    function animateParticles() {
        particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Wrap around screen
            if (particle.x < 0) particle.x = window.innerWidth;
            if (particle.x > window.innerWidth) particle.x = 0;
            if (particle.y < 0) particle.y = window.innerHeight;
            if (particle.y > window.innerHeight) particle.y = 0;
            
            particle.element.style.left = particle.x + 'px';
            particle.element.style.top = particle.y + 'px';
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
}

// Show cosmic welcome message
function showCosmicWelcome() {
    const welcome = document.createElement('div');
    welcome.innerHTML = '🌌 Welcome to @papapa Website! 🚀';
    welcome.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #1976d2, #1565c0);
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        font-size: 1rem;
        z-index: 9999;
        box-shadow: 0 10px 25px rgba(25,118,210,0.3);
        animation: slideInRight 0.8s ease-out;
        border: 2px solid rgba(255,255,255,0.3);
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            0% { transform: translateX(100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(welcome);
    
    setTimeout(() => {
        welcome.style.opacity = '0';
        welcome.style.transform = 'translateX(100%)';
        welcome.style.transition = 'all 0.5s ease';
        setTimeout(() => {
            document.body.removeChild(welcome);
            document.head.removeChild(style);
        }, 500);
    }, 4000);
}

// Console easter egg for fellow developers
console.log(`
    ╔══════════════════════════════════════╗
    ║           Hey there, dev! 👋          ║
    ║                                      ║
    ║    Looks like you're checking out    ║
    ║         the code. Nice one!          ║
    ║                                      ║
    ║     Built with ❤️ by @papapa         ║
    ║                                      ║
    ║   Want to collaborate? Hit me up!    ║
    ╚══════════════════════════════════════╝
`);

// Add some fun interactions
document.addEventListener('keydown', function(e) {
    // Easter egg: Press 'p' three times quickly for a surprise
    if (!window.keyPresses) window.keyPresses = [];
    
    if (e.key.toLowerCase() === 'p') {
        window.keyPresses.push(Date.now());
        
        // Keep only the last 3 key presses
        if (window.keyPresses.length > 3) {
            window.keyPresses.shift();
        }
        
        // Check if all 3 were within 2 seconds
        if (window.keyPresses.length === 3) {
            const timeDiff = window.keyPresses[2] - window.keyPresses[0];
            if (timeDiff < 2000) {
                showEasterEgg();
                window.keyPresses = [];
            }
        }
    }
});

function showEasterEgg() {
    const easterEgg = document.createElement('div');
    easterEgg.innerHTML = '🎮 You found the cosmic secret! Keep coding & gaming in the void! 🌌🚀';
    easterEgg.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #1976d2, #1565c0, #42a5f5);
        background-size: 200% 200%;
        animation: gradientShift 2s ease infinite, cosmicBounce 0.8s ease-out;
        color: white;
        padding: 25px 45px;
        border-radius: 20px;
        font-size: 1.3rem;
        z-index: 9999;
        box-shadow: 0 25px 50px rgba(25,118,210,0.4);
        border: 3px solid rgba(255,255,255,0.5);
        text-align: center;
        max-width: 400px;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes cosmicBounce {
            0% { transform: translate(-50%, -50%) scale(0) rotate(180deg); }
            60% { transform: translate(-50%, -50%) scale(1.2) rotate(0deg); }
            100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(easterEgg);
    
    // Add some cosmic sparkles
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = ['✨', '⭐', '🌟', '💫'][Math.floor(Math.random() * 4)];
            sparkle.style.cssText = `
                position: fixed;
                top: ${Math.random() * 100}vh;
                left: ${Math.random() * 100}vw;
                font-size: 2rem;
                z-index: 9998;
                animation: sparkleFloat 2s ease-out forwards;
                pointer-events: none;
            `;
            
            const sparkleStyle = document.createElement('style');
            sparkleStyle.textContent = `
                @keyframes sparkleFloat {
                    0% { transform: scale(0) rotate(0deg); opacity: 1; }
                    100% { transform: scale(1.5) rotate(360deg); opacity: 0; }
                }
            `;
            document.head.appendChild(sparkleStyle);
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                document.body.removeChild(sparkle);
                document.head.removeChild(sparkleStyle);
            }, 2000);
        }, i * 100);
    }
    
    setTimeout(() => {
        easterEgg.style.opacity = '0';
        easterEgg.style.transform = 'translate(-50%, -50%) scale(0.8) rotate(180deg)';
        easterEgg.style.transition = 'all 0.5s ease';
        setTimeout(() => {
            document.body.removeChild(easterEgg);
            document.head.removeChild(style);
        }, 500);
    }, 4000);
}
