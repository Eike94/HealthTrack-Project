if (localStorage.getItem('token') == null) {
    alert('Voce Precisa estar logado para acessar essa página');
    window.location.href = 'Login.html';
}