document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item.has-submenu');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get the submenu element immediately following the clicked item
            const submenu = item.nextElementSibling;
            
            // Check if the next element is indeed a submenu
            if (submenu && submenu.classList.contains('submenu')) {
                // Toggle the 'open' class
                submenu.classList.toggle('open');
                
                // Toggle the arrow icon (optional: rotate arrow)
                const arrow = item.querySelector('.submenu-toggle');
                if (arrow) {
                    arrow.classList.toggle('fa-chevron-down');
                    arrow.classList.toggle('fa-chevron-up');
                }
            }
        });
    });
});