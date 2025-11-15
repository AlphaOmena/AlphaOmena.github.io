// User data (for demonstration purposes)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' }

];

// Function to handle login
function handleLogin() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const message = document.getElementById('message');

    if (usernameInput && passwordInput && message) {
        const username = usernameInput.value;
        const password = passwordInput.value;

        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            localStorage.setItem('loggedInUser', username); // Store login state
            window.location.href = 'main.html'; // Redirect to protected page
        } else {
            message.textContent = 'Invalid username or password.';
        }
    }
}

// Function to handle logout
function handleLogout() {
    localStorage.removeItem('loggedInUser'); // Clear login state
    window.location.href = 'login.html'; // Redirect to login page
}

// Check login status on page load (for protected pages)
function checkLoginStatus() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser && window.location.pathname.includes('main.html')) {
        window.location.href = 'login.html'; // Redirect if not logged in
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // For login page
    const loginButton = document.getElementById('loginBtn');
    if (loginButton) {
        loginButton.addEventListener('click', handleLogin);
    }

    // For dashboard page
    const logoutButton = document.getElementById('logoutBtn');
    if (logoutButton) {
        logoutButton.addEventListener('click', handleLogout);
    }

    checkLoginStatus(); // Check on every page load
});

