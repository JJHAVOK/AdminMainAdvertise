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
















// This logic assumes the installation of the AWS SDK/Amplify later.
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');
    const loginBtn = document.getElementById('loginBtn');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            loginMessage.textContent = '';
            loginBtn.disabled = true;
            loginBtn.innerHTML = 'Logging in... <i class="fas fa-spinner fa-spin"></i>';

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // --- THIS IS THE CRITICAL AWS COGNITO INTERACTION STEP ---
            try {
                // In a live environment, you would call: 
                // const user = await Auth.signIn(username, password);
                
                // Placeholder: Simulate successful AWS sign-in after a delay
                await new Promise(resolve => setTimeout(resolve, 1500)); 
                
                // If successful:
                // 1. Store the user's access token (JWT) securely (e.g., in localStorage)
                // 2. Redirect the user to the dashboard
                window.location.href = 'admin-dashboard.html'; 

            } catch (error) {
                // Handle AWS Cognito errors (e.g., Invalid credentials, User not found)
                loginMessage.textContent = 'Login failed. Check username and password.';
                console.error("Login Error:", error);
            } finally {
                loginBtn.disabled = false;
                loginBtn.innerHTML = 'Sign In <i class="fas fa-sign-in-alt"></i>';
            }
        });
    }

    // --- Submenu Toggle Logic (Keep this from the previous step) ---
    const navItems = document.querySelectorAll('.nav-item.has-submenu');
    if (navItems.length > 0) { // Check if we are on the dashboard page
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                // ... (your existing submenu toggle logic) ...
            });
        });
    }
});