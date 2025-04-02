

// Authentication functions
const auth = {
    // Helper function to hash passwords
    hashPassword: function(password) {
        return crypto.subtle.digest('SHA-256', new TextEncoder().encode(password))
            .then(hash => {
                return Array.from(new Uint8Array(hash))
                    .map(b => b.toString(16).padStart(2, '0'))
                    .join('');
            });
    },

    login: function(username, password) {
        return new Promise((resolve, reject) => {
            // Hash the provided password
            this.hashPassword(password)
                .then(hashedPassword => {
                    // Compare with stored hash from config
                    if (username === ADMIN_CONFIG.username && 
                        hashedPassword === ADMIN_CONFIG.passwordHash) {
                        // Set session storage to maintain login state
                        sessionStorage.setItem('isLoggedIn', 'true');
                        sessionStorage.setItem('username', username);
                        resolve(true);
                    } else {
                        reject(new Error('Invalid username or password'));
                    }
                })
                .catch(error => {
                    reject(new Error('Authentication error'));
                });
        });
    },

    logout: function() {
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('username');
        window.location.href = 'index.html';
    },

    isAuthenticated: function() {
        return sessionStorage.getItem('isLoggedIn') === 'true';
    },

    checkAuth: function() {
        if (!this.isAuthenticated() && window.location.pathname !== '/index.html') {
            window.location.href = 'index.html';
        }
    }
};
