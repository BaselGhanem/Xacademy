// Main JavaScript for X Academy Website
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initThemeToggle();
    initNavigation();
    initParticles();
    initCourseCards();
    initModals();
    initScrollAnimations();
    initStepTracker();
});

// Theme Toggle Functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Update icon based on current theme
    if (savedTheme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Apply new theme
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        if (newTheme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
        
        // Add subtle animation to toggle button
        themeToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
    });
}

// Navigation Functionality
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Hamburger menu toggle
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Animate hamburger lines
        const spans = this.querySelectorAll('span');
        if (this.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Close mobile menu if open
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
                
                // Scroll to section
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        // Update active navigation link based on scroll position
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
        
        // Add shadow to navigation on scroll
        const nav = document.querySelector('.nav-container');
        if (scrollPosition > 50) {
            nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.boxShadow = 'var(--glass-shadow)';
        }
    });
}

// Particle Background for Hero Section
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
    
    function createParticle(container) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        particle.style.borderRadius = '50%';
        particle.style.position = 'absolute';
        particle.style.opacity = '0';
        
        // Add animation
        particle.style.animation = `floatParticle ${duration}s ease-in-out ${delay}s infinite`;
        
        container.appendChild(particle);
    }
    
    // Add CSS for particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0%, 100% {
                transform: translate(0, 0);
                opacity: 0;
            }
            10% {
                opacity: 0.7;
            }
            90% {
                opacity: 0.7;
            }
            50% {
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
            }
        }
    `;
    document.head.appendChild(style);
}

// Course Cards Interaction
function initCourseCards() {
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            const glow = this.querySelector('.card-glow');
            if (glow) glow.style.opacity = '1';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            const glow = this.querySelector('.card-glow');
            if (glow) glow.style.opacity = '0';
        });
    });
}

// Modal Functionality
function initModals() {
    const modalTriggers = document.querySelectorAll('.details-btn');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal-close');
    
    // Course data for modals
    const courseData = {
        excel: {
            topics: [
                "التعامل مع البيانات بشكل احترافي (تنظيف البيانات، إزالة التكرارات، تقسيم النصوص)",
                "الدوال المتقدمة (Lookup, Logical, Text, Date & Time)",
                "الجداول المحورية (Pivot Tables) والتقارير التفاعلية",
                "الرسوم البيانية المتقدمة (Advanced Charts)",
                "تحليل ماذا لو (What-If Analysis) والبحث عن الهدف (Goal Seek)",
                "أدوات تحليل البيانات (Data Analysis ToolPak)",
                "أتمتة المهام باستخدام ماكرو (Macro)",
                "حلول عملية لمشاكل حقيقية في بيئة العمل"
            ]
        },
        powerbi: {
            modules: [
                "المقدمة والتعرف على واجهة Power BI",
                "تحميل البيانات من مصادر مختلفة",
                "تنظيف وتحويل البيانات باستخدام Power Query",
                "نمذجة البيانات وإنشاء العلاقات",
                "إنشاء المقاييس والدوال باستخدام DAX",
                "تصميم التقارير واللوحات التفاعلية",
                "النشر والمشاركة على خدمة Power BI"
            ]
        }
    };
    
    // Open modal when course card is clicked
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const course = this.getAttribute('data-course');
            const modal = document.getElementById(`${course}-modal`);
            
            if (modal) {
                // Populate modal with course data
                if (course === 'excel') {
                    const topicsList = modal.querySelector('.topics-list');
                    if (topicsList) {
                        topicsList.innerHTML = '';
                        courseData.excel.topics.forEach(topic => {
                            const li = document.createElement('li');
                            li.textContent = topic;
                            topicsList.appendChild(li);
                        });
                    }
                } else if (course === 'powerbi') {
                    const modulesList = modal.querySelector('.modules-list');
                    if (modulesList) {
                        modulesList.innerHTML = '';
                        courseData.powerbi.modules.forEach(module => {
                            const li = document.createElement('li');
                            li.textContent = module;
                            modulesList.appendChild(li);
                        });
                    }
                }
                
                // Show modal
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal when close button is clicked
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Close modal when clicking outside content
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Tab functionality in modals
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabContainer = this.closest('.modal-tabs');
            const tabId = this.getAttribute('data-tab');
            const modal = this.closest('.modal-content');
            
            // Update active tab button
            tabContainer.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            
            // Show corresponding tab content
            modal.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            modal.querySelector(`#${tabId}-tab`).classList.add('active');
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.course-card, .instructor-container, .step').forEach(el => {
        observer.observe(el);
    });
    
    // Add CSS for scroll animations
    const style = document.createElement('style');
    style.textContent = `
        .course-card, .instructor-container, .step {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .course-card.animate-in, .instructor-container.animate-in, .step.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .course-card:nth-child(odd) {
            transition-delay: 0.1s;
        }
        
        .course-card:nth-child(even) {
            transition-delay: 0.2s;
        }
    `;
    document.head.appendChild(style);
}

// Step Tracker for Registration
function initStepTracker() {
    const stepDots = document.querySelectorAll('.step-dot');
    const steps = document.querySelectorAll('.step');
    
    // Initialize first step as active
    if (steps.length > 0) {
        steps[0].classList.add('active');
    }
    
    // Update active step based on scroll
    window.addEventListener('scroll', function() {
        const registrationSection = document.getElementById('registration');
        const sectionTop = registrationSection.offsetTop;
        const sectionHeight = registrationSection.offsetHeight;
        const scrollPosition = window.scrollY;
        
        // Calculate which step should be active based on scroll position
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const stepHeight = sectionHeight / steps.length;
            const activeStep = Math.min(
                Math.floor((scrollPosition - sectionTop) / stepHeight) + 1,
                steps.length
            );
            
            // Update step dots
            stepDots.forEach((dot, index) => {
                if (index < activeStep) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
            
            // Update step content visibility
            steps.forEach((step, index) => {
                if (index === activeStep - 1) {
                    step.classList.add('active');
                } else {
                    step.classList.remove('active');
                }
            });
        }
    });
}

// Additional utility: Form submission handling
function handleFormSubmission(formId, successCallback) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const inputs = this.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (isValid) {
                // In a real application, you would send the form data to a server here
                // For demo purposes, we'll just show a success message
                if (successCallback) successCallback();
            }
        });
    }
}

// Initialize form handling if forms exist
document.addEventListener('DOMContentLoaded', function() {
    handleFormSubmission('registration-form', function() {
        alert('تم إرسال طلب التسجيل بنجاح! سنتواصل معك قريباً.');
    });
});
