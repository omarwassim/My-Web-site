document.addEventListener('DOMContentLoaded', function() {
    const isMobile = ('ontouchstart' in window) || 
                    (navigator.maxTouchPoints > 0) || 
                    (navigator.msMaxTouchPoints > 0);

    if (isMobile) {
        const hoverElements = document.querySelectorAll(
            '.logo, .navigation a, .main h2 span, .main-btn, .card, .card p, .project-card, .More-details, .social-icons a'
        );

        const isInViewport = (element) => {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.bottom >= 0
            );
        };
        const handleScrollHover = () => {
            hoverElements.forEach(element => {
                if (isInViewport(element)) {
                    element.classList.add('scrolled-into-view');
                } else {
                    element.classList.remove('scrolled-into-view');
                }
            });
        };
        handleScrollHover();
        let isScrolling;
        window.addEventListener('scroll', function() {
            window.clearTimeout(isScrolling);
            isScrolling = setTimeout(function() {
                handleScrollHover();
            }, 66); 
        }, false);
        hoverElements.forEach(el => {
            el.addEventListener('touchstart', function() {
                this.classList.add('tapped');
                setTimeout(() => {
                    this.classList.remove('tapped');
                }, 500);
            });
        });
    }
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});