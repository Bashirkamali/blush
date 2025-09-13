// Blush Flower Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Tutorial Data with better images
    const tutorialSteps = [
        {
            title: 'سفارش سریع از واتساپ',
            description: 'سریع‌ترین راه ثبت سفارش و ارتباط مستقیم با تیم Blush. با یک کلیک، مستقیماً با ما در ارتباط باشید.',
            image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9IndoYXRzYXBwLWdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMjVkMzY2O3N0b3Atb3BhY2l0eToxIi8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzEyOGM3ZTtzdG9wLW9wYWNpdHk6MSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiByeD0iMjAiIGZpbGw9InVybCgjd2hhdHNhcHAtZ3JhZCkiLz4KPGNpcmNsZSBjeD0iNjAiIGN5PSI2MCIgcj0iMzUiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik00NSA0NWMwLTguMjggNi43Mi0xNSAxNS0xNXMxNSA2LjcyIDE1IDE1LTE1IDE1LTE1IDE1LTE1LTYuNzItMTUtMTV6IiBmaWxsPSIjMjVkMzY2Ii8+CjxwYXRoIGQ9Ik02MCA0NWMwLTUuNTIgNC40OC0xMCAxMC0xMHMxMCA0LjQ4IDEwIDEwLTQuNDggMTAtMTAgMTAtMTAtNC40OC0xMC0xMHoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02MCA1NWMtMi43NiAwLTUtMi4yNC01LTVzMi4yNC01IDUtNSA1IDIuMjQgNSA1LTIuMjQgNS01IDV6IiBmaWxsPSIjMjVkMzY2Ii8+CjxwYXRoIGQ9Ik02MCA2NWMtMi43NiAwLTUtMi4yNC01LTVzMi4yNC01IDUtNSAxIDIuMjQgNSA1LTIuMjQgNS01IDV6IiBmaWxsPSIjMjVkMzY2Ii8+CjxwYXRoIGQ9Ik02MCA3NWMtMi43NiAwLTUtMi4yNC01LTVzMi4yNC01IDUtNSA1IDIuMjQgNSA1LTIuMjQgNS01IDV6IiBmaWxsPSIjMjVkMzY2Ii8+Cjwvc3ZnPgo=',
            color: '#25d366'
        },
        {
            title: 'مشاهده نمونه‌کارها در اینستاگرام',
            description: 'گالری زیبای نمونه‌کارهای ما را در اینستاگرام مشاهده کنید. از گل‌آرایی‌های لوکس و مینیمال ما الهام بگیرید.',
            image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9Imluc3RhLWdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjQwNWY7c3RvcC1vcGFjaXR5OjEiLz4KPHN0b3Agb2Zmc2V0PSI1MCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmMDc3YjI7c3RvcC1vcGFjaXR5OjEiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojYzEzNTg0O3N0b3Atb3BhY2l0eToxIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIHJ4PSIyMCIgZmlsbD0idXJsKCNpbnN0YS1ncmFkKSIvPgo8Y2lyY2xlIGN4PSI2MCIgY3k9IjYwIiByPSI0MCIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTQwIDQwYzAtMTEuMDQ1IDguOTU1LTIwIDIwLTIwczIwIDguOTU1IDIwIDIwLTguOTU1IDIwLTIwIDIwLTIwLTguOTU1LTIwLTIweiIgZmlsbD0idXJsKCNpbnN0YS1ncmFkKSIvPgo8Y2lyY2xlIGN4PSI2MCIgY3k9IjYwIiByPSIxNSIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iNzUiIGN5PSI0NSIgcj0iNSIgZmlsbD0iI2Y0MDVmIi8+CjxwYXRoIGQ9Ik02MCA3NWMtOC4yODQgMC0xNS02LjcxNi0xNS0xNXM2LjcxNi0xNSAxNS0xNSAxNSA2LjcxNiAxNSAxNS02LjcxNiAxNS0xNSAxNXoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Y0MDVmIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+Cg==',
            color: '#e4405f'
        },
        {
            title: 'ویترین روزانه Blush',
            description: 'هر روز گل‌های تازه و خاص در ویترین ما. محصولات روزانه با قیمت‌های ویژه و طراحی منحصر به فرد.',
            image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImZsb3dlci1ncmFkIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6I2Y2ZDZlNTtzdG9wLW9wYWNpdHk6MSIvPgo8c3RvcCBvZmZzZXQ9IjUwJSIgc3R5bGU9InN0b3AtY29sb3I6I2Y4ZTY2ZjtzdG9wLW9wYWNpdHk6MSIvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNkNGFmMzc7c3RvcC1vcGFjaXR5OjEiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgcng9IjIwIiBmaWxsPSJ1cmwoI2Zsb3dlci1ncmFkKSIvPgo8Y2lyY2xlIGN4PSI2MCIgY3k9IjgwIiByPSIxNSIgZmlsbD0iI2Y2ZDZlNSIvPgo8cGF0aCBkPSJNNDAgNzBjMC04LjI4NCA2LjcxNi0xNSAxNS0xNXMxNSA2LjcxNiAxNSAxNS02LjcxNiAxNS0xNSAxNS0xNS02LjcxNi0xNS0xNXoiIGZpbGw9IiNmNmQ2ZTUiLz4KPHBhdGggZD0iTTUwIDUwYzAtNS41MjMgNC40NzctMTAgMTAtMTBzMTAgNC40NzcgMTAgMTAtNC40NzcgMTAtMTAgMTAtMTAtNC40NzctMTAtMTB6IiBmaWxsPSIjZDRhZjM3Ii8+CjxwYXRoIGQ9Ik02MCAzNWMwLTUuNTIzIDQuNDc3LTEwIDEwLTEwczEwIDQuNDc3IDEwIDEwLTQuNDc3IDEwLTEwIDEwLTEwLTQuNDc3LTEwLTEweiIgZmlsbD0iI2Y2ZDZlNSIvPgo8cGF0aCBkPSJNNzAgNjBjMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMHMxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMC0xMC00LjQ3Ny0xMC0xMHoiIGZpbGw9IiNkNGFmMzciLz4KPHBhdGggZD0iTTMwIDUwYzAtNS41MjMgNC40NzctMTAgMTAtMTBzMTAgNC40NzcgMTAgMTAtNC40NzcgMTAtMTAgMTAtMTAtNC40NzctMTAtMTB6IiBmaWxsPSIjZjZkNmU1Ii8+CjxwYXRoIGQ9Ik02MCAyNWMtMi43NiAwLTUgMi4yNC01IDVzMi4yNCA1IDUgNS01IDIuMjQtNSA1LTIuMjQgNS01IDV6IiBmaWxsPSIjZDRhZjM3Ii8+CjxwYXRoIGQ9Ik02MCA5NWMtMi43NiAwLTUgMi4yNC01IDVzMi4yNCA1IDUgNS01IDIuMjQtNSA1LTIuMjQgNS01IDV6IiBmaWxsPSIjZDRhZjM3Ii8+Cjwvc3ZnPgo=',
            color: '#d4af37'
        }
    ];

    let currentStep = 0;
    let isTyping = false;

    // DOM Elements
    const tutorialOverlay = document.getElementById('tutorial-overlay');
    const tutorialImage = document.getElementById('tutorial-image');
    const tutorialText = document.getElementById('tutorial-text');
    const tutorialNextBtn = document.getElementById('tutorial-next');
    const mainContent = document.getElementById('main-content');

    // Initialize Tutorial
    function initTutorial() {
        if (localStorage.getItem('blush-tutorial-completed')) {
            showMainContent();
            return;
        }
        
        showTutorialStep(0);
        tutorialOverlay.classList.remove('hidden');
        setTimeout(() => {
            tutorialOverlay.classList.add('active');
        }, 100);
    }

    // Show Tutorial Step
    function showTutorialStep(stepIndex) {
        if (stepIndex >= tutorialSteps.length) {
            completeTutorial();
            return;
        }

        const step = tutorialSteps[stepIndex];
        currentStep = stepIndex;

        // Update image with better styling
        tutorialImage.src = step.image;
        tutorialImage.style.border = `4px solid ${step.color}`;
        tutorialImage.style.boxShadow = `0 10px 30px ${step.color}40`;

        // Type text
        typeText(step.description);

        // Update button text and styling
        if (stepIndex === tutorialSteps.length - 1) {
            tutorialNextBtn.textContent = 'شروع کنید';
            tutorialNextBtn.style.background = `linear-gradient(135deg, ${step.color} 0%, ${step.color}dd 100%)`;
        } else {
            tutorialNextBtn.textContent = 'بعدی';
            tutorialNextBtn.style.background = `linear-gradient(135deg, ${step.color} 0%, ${step.color}dd 100%)`;
        }
    }

    // Typewriter Effect
    function typeText(text) {
        isTyping = true;
        tutorialText.textContent = '';
        tutorialText.classList.add('typewriter');
        
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                tutorialText.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
                isTyping = false;
                tutorialText.classList.remove('typewriter');
            }
        }, 50);
    }

    // Next Tutorial Step
    function nextTutorialStep() {
        if (isTyping) {
            // Skip typing if user clicks too fast
            tutorialText.textContent = tutorialSteps[currentStep].description;
            tutorialText.classList.remove('typewriter');
            isTyping = false;
            return;
        }
        
        showTutorialStep(currentStep + 1);
    }

    // Complete Tutorial
    function completeTutorial() {
        tutorialOverlay.classList.remove('active');
        setTimeout(() => {
            tutorialOverlay.classList.add('hidden');
            showMainContent();
            localStorage.setItem('blush-tutorial-completed', 'true');
        }, 300);
    }

    // Show Main Content
    function showMainContent() {
        mainContent.classList.add('visible');
        
        // Add hover effects to sections
        const sections = document.querySelectorAll('.section');
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    // Event Listeners
    tutorialNextBtn.addEventListener('click', nextTutorialStep);

    // Skip tutorial on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && tutorialOverlay.classList.contains('active')) {
            completeTutorial();
        }
    });

    // Initialize
    initTutorial();

    // Add smooth scrolling for anchor links
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

    // Add loading states to CTA buttons
    document.querySelectorAll('.cta-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const originalText = this.innerHTML;
            this.innerHTML = '<span class="loading"></span> در حال انتقال...';
            
            setTimeout(() => {
                this.innerHTML = originalText;
            }, 2000);
        });
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for animation
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });
});