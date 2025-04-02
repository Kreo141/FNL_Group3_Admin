// Authentication functions
const auth = {
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
            this.hashPassword(password)
                .then(hashedPassword => {
                    if (username === ADMIN_CONFIG.username && 
                        hashedPassword === ADMIN_CONFIG.passwordHash) {
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
        window.location.href = '../../index.html';
    },

    isAuthenticated: function() {
        return sessionStorage.getItem('isLoggedIn') === 'true';
    },

    checkAuth: function() {
        const currentPath = window.location.pathname;
        const isLoginPage = currentPath.endsWith('index.html') || currentPath === '/';
        
        if (!this.isAuthenticated() && !isLoginPage) {
            window.location.href = '../../index.html';
        } else if (this.isAuthenticated() && isLoginPage) {
            window.location.href = 'pages/02-Dashboard/dashboard.html';
        }
    }
};
