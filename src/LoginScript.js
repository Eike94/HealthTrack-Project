function entrar(){
    let usuarioInput = document.querySelector('#userInput');
    let titUsuario = document.querySelector('#titUsuario');

    let senhaInput = document.querySelector('#senhaInput');
    let titSenha = document.querySelector('#titSenha');

    let msgErro = document.querySelector('#msgErro');

    let listaUser = [];

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'));
    
    listaUser.forEach((item) => {
        if (usuarioInput.value == item.usuarioCad && senhaInput.value == item.senhaCad) {
            userValid = {
                nome: item.nomeCad,
                user: item.usuarioCad,
                senha: item.senhaCad
            }
        }
    });

    if (usuarioInput.value == userValid.user && senhaInput.value == userValid.senha) {
        
        titUsuario.setAttribute('style', 'color: green');
        usuarioInput.setAttribute('style', 'border-color: green');
        titSenha.setAttribute('style', 'color: green');
        senhaInput.setAttribute('style', 'border-color: green');

        setTimeout(() => {
            window.location.href = 'homepage.html';
        }, 1000);

        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
        localStorage.setItem('token' , token);
    }else{
        titUsuario.setAttribute('style', 'color: orange');
        usuarioInput.setAttribute('style', 'border-color: orange');
        titSenha.setAttribute('style', 'color: orange');
        senhaInput.setAttribute('style', 'border-color: orange');
        msgErro.setAttribute('style', 'display: block');
        msgErro.innerHTML = 'Usuário ou senha Incorretos';
        usuarioInput.focus();
    }

}