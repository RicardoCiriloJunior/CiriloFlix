let login = localStorage.getItem('login');

if (! login) {
    window.location.href = 'login.html';
}