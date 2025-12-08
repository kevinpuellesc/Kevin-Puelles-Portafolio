// Funcionalidad Global Compartida
document.addEventListener('DOMContentLoaded', () => {
    
    // Inicializar Iconos Lucide
    if(window.lucide) {
        lucide.createIcons();
    }

    // Menú Móvil
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                // Timeout para permitir que el display:block se aplique antes de la opacidad
                setTimeout(() => mobileMenu.classList.remove('opacity-0'), 10);
                
                // Cambiar icono a X
                const icon = mobileBtn.querySelector('i');
                if(icon) {
                    icon.setAttribute('data-lucide', 'x');
                    lucide.createIcons();
                }
                mobileBtn.classList.remove('text-white');
                mobileBtn.classList.add('text-gray-900');

            } else {
                mobileMenu.classList.add('opacity-0');
                setTimeout(() => mobileMenu.classList.add('hidden'), 300);
                
                // Cambiar icono a Menu
                const icon = mobileBtn.querySelector('i');
                if(icon) {
                    icon.setAttribute('data-lucide', 'menu');
                    lucide.createIcons();
                }
                
                // Si estamos en home (fondo oscuro), volver el icono blanco si no scrolleamos
                const navbar = document.getElementById('navbar');
                if (navbar && navbar.classList.contains('bg-transparent')) {
                    mobileBtn.classList.remove('text-gray-900');
                    mobileBtn.classList.add('text-white');
                }
            }
        });
    }
});