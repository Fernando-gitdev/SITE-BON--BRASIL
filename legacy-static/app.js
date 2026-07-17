document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       0.1 MAGNETIC BUTTONS & INTERACTIVE ELEMENTS
       ========================================================================== */
    const magneticElements = document.querySelectorAll('.btn-primary, .btn-secondary, .logo, .menu-toggle');
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const factor = el.classList.contains('btn') ? 0.18 : 0.1;
            requestAnimationFrame(() => {
                el.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
                el.style.transition = 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)';
            });
        });
        el.addEventListener('mouseleave', () => {
            requestAnimationFrame(() => {
                el.style.transform = 'translate(0px, 0px)';
                el.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
            });
        });
    });

    /* ==========================================================================
       1-2. MOUSE TRACKING EFFECTS REMOVED (institutional redesign)
       ========================================================================== */

    /* ==========================================================================
       3. NAVIGATION LOGIC & MOBILE MENU
       ========================================================================== */
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // SCROLL NAVBAR COMPRESSION EFFECT
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // MOBILE HAMBURGER TOGGLE
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // CLOSE MENU ON LINK CLICK (Mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    /* ==========================================================================
       4. SCROLL INTERSECTION OBSERVER (FADE-UP & ENTRANCE ANIMATIONS)
       ========================================================================== */
    const revealItems = document.querySelectorAll('.reveal-item, .timeline-item');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add active animation class when element enters viewport
                entry.target.classList.add('active');
                
                // If it is a timeline item, highlight its node marker
                if (entry.target.classList.contains('timeline-item')) {
                    entry.target.classList.add('active-timeline');
                }
                
                // Unobserve after animating in (one-shot entrance)
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15, // trigger when 15% of the element is visible
        rootMargin: '0px 0px -50px 0px' // offset bottom slightly for better visual timing
    });

    revealItems.forEach(item => {
        revealObserver.observe(item);
    });

    /* ==========================================================================
       5. NUMERICAL PROGRESSIVE COUNTERS
       ========================================================================== */
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const countNumber = (element) => {
        const target = parseInt(element.getAttribute('data-target'), 10);
        const duration = 2000; // 2 seconds animation
        const startTime = performance.now();
        
        const updateNumber = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // EaseOutQuad function for smoother deceleration at the end
            const easeProgress = progress * (2 - progress);
            const currentValue = Math.floor(easeProgress * target);
            
            // Format number with thousands separator if needed
            if (target >= 1000) {
                const formatted = currentValue.toString().replace(/\B(?=(\d{3})+(?!\n))/g, ".");
                element.textContent = `${formatted}+`;
            } else {
                element.textContent = `${currentValue}+`;
            }
            
            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            } else {
                // Confirm target is exactly matching on end
                if (target >= 1000) {
                    element.textContent = `${target.toString().replace(/\B(?=(\d{3})+(?!\n))/g, ".")}+`;
                } else {
                    element.textContent = `${target}+`;
                }
            }
        };
        
        requestAnimationFrame(updateNumber);
    };

    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                countNumber(entry.target);
                observer.unobserve(entry.target); // only animate once
            }
        });
    }, {
        threshold: 0.5
    });

    statNumbers.forEach(num => {
        statsObserver.observe(num);
    });

    /* ==========================================================================
       6. INTERACTIVE TAB SELECTOR WITH SLIDING PILL AND FADE-OUT / FADE-IN
       ========================================================================== */
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    const tabPillBg = document.querySelector('.tab-pill-bg');

    const updateTabPill = (btn) => {
        if (!tabPillBg || !btn) return;
        requestAnimationFrame(() => {
            tabPillBg.style.width = `${btn.offsetWidth}px`;
            tabPillBg.style.height = `${btn.offsetHeight}px`;
            tabPillBg.style.left = `${btn.offsetLeft}px`;
            tabPillBg.style.top = `${btn.offsetTop}px`;
        });
    };

    // Initialize pill position
    const initialActiveBtn = document.querySelector('.tab-btn.active');
    if (initialActiveBtn) {
        setTimeout(() => updateTabPill(initialActiveBtn), 150);
    }

    window.addEventListener('resize', () => {
        const activeBtn = document.querySelector('.tab-btn.active');
        if (activeBtn) updateTabPill(activeBtn);
    });

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-tab');
            const activePanel = document.querySelector('.tab-panel.active');
            const targetPanel = document.getElementById(targetId);
            
            if (btn.classList.contains('active')) return;
            
            // 1. Highlight clicked tab button & slide pill
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateTabPill(btn);
            
            // 2. Perform exit animation on currently active panel
            if (activePanel) {
                activePanel.classList.add('exiting');
                
                setTimeout(() => {
                    activePanel.classList.remove('active', 'exiting');
                    targetPanel.classList.add('active');
                }, 400);
            } else {
                targetPanel.classList.add('active');
            }
        });
    });

    /* ==========================================================================
       7. TIMELINE PROGRESS BAR SCROLL ANIMATION
       ========================================================================== */
    const timelineContainer = document.querySelector('.timeline-container');
    const timelineProgress = document.getElementById('timelineProgress');

    const updateTimelineProgress = () => {
        if (!timelineContainer) return;
        
        const containerRect = timelineContainer.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calculate scroll progress percentage based on center of screen
        const startPoint = containerRect.top - (viewportHeight / 2);
        const totalHeight = containerRect.height;
        
        let progress = 0;
        
        if (startPoint < 0) {
            progress = Math.abs(startPoint) / totalHeight;
            if (progress > 1) progress = 1;
        }
        
        timelineProgress.style.height = `${progress * 100}%`;
    };

    window.addEventListener('scroll', updateTimelineProgress);
    window.addEventListener('resize', updateTimelineProgress);

    /* ==========================================================================
       8. FORM SUBMISSION VALIDATION & SUCCESS STATE
       ========================================================================== */
    const regForm = document.getElementById('fairRegistrationForm');
    const formSuccess = document.getElementById('formSuccess');
    const submitBtn = document.getElementById('submitBtn');
    const resetFormBtn = document.getElementById('resetFormBtn');

    regForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Check standard HTML5 validation
        if (!regForm.checkValidity()) {
            // Trigger browser report validity to highlight errors
            regForm.reportValidity();
            return;
        }
        
        // Submit button loading animation state
        submitBtn.disabled = true;
        const btnText = submitBtn.querySelector('span');
        const originalText = btnText.textContent;
        btnText.textContent = 'Enviando...';
        
        // Simulate premium network request (1.5 seconds)
        setTimeout(() => {
            // Fade out form and activate success screen
            regForm.style.display = 'none';
            formSuccess.classList.add('active');
            
            // Scroll to the center of registration card smoothly
            document.getElementById('inscricao').scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Clean state
            submitBtn.disabled = false;
            btnText.textContent = originalText;
        }, 1500);
    });

    // RESET FORM TO MAKE NEW INSCRIPTION
    resetFormBtn.addEventListener('click', () => {
        regForm.reset();
        formSuccess.classList.remove('active');
        regForm.style.display = 'block';
    });

});
