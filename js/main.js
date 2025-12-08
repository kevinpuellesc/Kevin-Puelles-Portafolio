document.addEventListener('DOMContentLoaded', () => {
    
    // Inicializar iconos de Lucide
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // --- NAVBAR ---
    const navbar = document.getElementById('navbar');
    const navLogo = document.getElementById('nav-logo');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const isHome = navbar.getAttribute('data-is-home') === 'true';

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY > 50;
        
        if (scrolled || !isHome) {
            navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'border-b', 'border-gray-100', 'py-4');
            navbar.classList.remove('bg-transparent', 'py-6');
            navLogo.classList.remove('text-white', 'mix-blend-difference');
            navLogo.classList.add('text-gray-900');
            if(menuIcon && isHome) {
                menuIcon.classList.remove('text-white');
                menuIcon.classList.add('text-gray-900');
            }
            // Update desktop links color for visibility on white
            document.querySelectorAll('.nav-link').forEach(link => {
                if(link.classList.contains('text-gray-200')) {
                    link.classList.remove('text-gray-200', 'hover:text-white');
                    link.classList.add('text-gray-500', 'hover:text-gray-900');
                }
                if(link.classList.contains('border-white')) {
                    link.classList.remove('text-white', 'border-white');
                    link.classList.add('text-gray-900', 'border-gray-900');
                }
            });

        } else if (isHome && !scrolled) {
            navbar.classList.add('bg-transparent', 'py-6');
            navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'border-b', 'border-gray-100', 'py-4');
            navLogo.classList.add('text-white', 'mix-blend-difference');
            navLogo.classList.remove('text-gray-900');
            if(menuIcon) {
                menuIcon.classList.add('text-white');
                menuIcon.classList.remove('text-gray-900');
            }
             // Revert desktop links
             document.querySelectorAll('.nav-link').forEach(link => {
                 // Logic to revert is complex without state, simplest is to reload page or keep simple css toggle
                 // For now, minimal JS logic:
                 if(link.classList.contains('text-gray-500') && !link.classList.contains('border-gray-900')) {
                    link.classList.add('text-gray-200', 'hover:text-white');
                    link.classList.remove('text-gray-500', 'hover:text-gray-900');
                 }
            });
        }
    });

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                // Small delay to allow display block to apply before opacity transition
                setTimeout(() => mobileMenu.classList.remove('opacity-0'), 10);
                menuIcon.setAttribute('data-lucide', 'x');
                menuIcon.classList.remove('text-white'); // Force black X on white menu
                menuIcon.classList.add('text-gray-900');
            } else {
                mobileMenu.classList.add('opacity-0');
                setTimeout(() => mobileMenu.classList.add('hidden'), 300);
                menuIcon.setAttribute('data-lucide', 'menu');
                if(isHome && window.scrollY < 50) {
                     menuIcon.classList.add('text-white');
                }
            }
            if (window.lucide) window.lucide.createIcons();
        });
    }

    // --- HERO SLIDER ---
    const slides = document.querySelectorAll('.slider-image');
    if (slides.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('opacity-100');
            slides[currentSlide].classList.add('opacity-0');
            
            currentSlide = (currentSlide + 1) % slides.length;
            
            slides[currentSlide].classList.remove('opacity-0');
            slides[currentSlide].classList.add('opacity-100');
        }, 5000);
    }

    // --- PORTFOLIO FILTERS ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update Active State
            filterBtns.forEach(b => {
                b.classList.remove('text-gray-900', 'font-medium', 'border-b', 'border-gray-900');
                b.classList.add('text-gray-400', 'hover:text-gray-600');
            });
            btn.classList.remove('text-gray-400', 'hover:text-gray-600');
            btn.classList.add('text-gray-900', 'font-medium', 'border-b', 'border-gray-900');

            const filter = btn.getAttribute('data-filter');

            items.forEach(item => {
                if (filter === 'All' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
