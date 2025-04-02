document.addEventListener('DOMContentLoaded', function() {
    // Check authentication
    if (!auth.isAuthenticated()) {
        window.location.href = '../../index.html';
        return;
    }

    // Setup logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            auth.logout();
        });
    }

    // Navigation handling
    const navItems = document.querySelectorAll('.nav-item');
    const contentSections = document.querySelectorAll('.content-section');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetSection = item.getAttribute('data-section');
            
            // Update navigation active state
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // Update content section visibility
            contentSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetSection) {
                    section.classList.add('active', 'fade-in');
                }
            });
        });
    });
});
