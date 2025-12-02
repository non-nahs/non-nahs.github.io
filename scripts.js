(function() {
    var yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    var pageKey = document.body ? document.body.dataset.page : null;
    if (pageKey) {
        var activeLink = document.querySelector('.nav-link[data-nav=\"' + pageKey + '\"]');
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    var navToggle = document.querySelector('.nav-toggle');
    var navMenu = document.querySelector('[data-nav-menu]');

    function closeMenu() {
        if (!navToggle || !navMenu) return;
        navMenu.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
    }

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            var isOpen = navMenu.classList.toggle('is-open');
            navToggle.classList.toggle('is-open', isOpen);
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        navMenu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    closeMenu();
                }
            });
        });

        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && navMenu.classList.contains('is-open')) {
                closeMenu();
            }
        });
    }
})();
