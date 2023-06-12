let nome = document.querySelector('#cadastroNome');
let tituloNome = document.querySelector('#tit-nome');
let validNome = false;

let usuario = document.querySelector('#cadastroUsuario');
let tituloUsuario = document.querySelector('#tit-usuario');
let validUsuario = false;

let data = document.querySelector('#cadastroData');
let tituloData = document.querySelector('#tit-data');
let validData = false;

let senha = document.querySelector('#cadastroSenha');
let tituloSenha = document.querySelector('#tit-senha');
let validSenha = false;

let msgErro = document.querySelector('#msgErro');
let msgSuccess = document.querySelector('#msgSuccess');

nome.addEventListener('keyup', () =>{
    if (nome.value.length <= 2) {
        tituloNome.setAttribute('style', 'color:orange');
        tituloNome.textContent = 'Insira no mínimo 3 caracteres';
        nome.setAttribute('style', 'border-color: orange');
    } else {
        tituloNome.setAttribute('style', 'color:green');
        tituloNome.textContent = 'Nome Completo';
        nome.setAttribute('style', 'border-color: green');
        validNome = true;
    }
})

usuario.addEventListener('keyup', () =>{

    if (usuario.value.length <= 5) {
        tituloUsuario.setAttribute('style', 'color:orange');
        tituloUsuario.textContent = 'Insira um usuario válido';
        usuario.setAttribute('style', 'border-color: orange');
    } else {
        tituloUsuario.setAttribute('style', 'color:green');
        tituloUsuario.textContent = 'Usuario';
        usuario.setAttribute('style', 'border-color: green');
        validUsuario = true;
    }
})

data.addEventListener('keyup', () =>{
    if (data.value.length <= 9) {
        tituloData.setAttribute('style', 'color:orange');
        tituloData.textContent = 'Insira uma data Valida';
        data.setAttribute('style', 'border-color: orange');
    } else {
        tituloData.setAttribute('style', 'color:green');
        tituloData.textContent = 'Data';
        data.setAttribute('style', 'border-color: green');
        validData = true;
    }
})

senha.addEventListener('keyup', () =>{

    if (senha.value.length < 6) {
        tituloSenha.setAttribute('style', 'color:orange');
        tituloSenha.textContent = 'Insira pelo menos 6 caracteres';
        senha.setAttribute('style', 'border-color: orange');
    } else {
        tituloSenha.setAttribute('style', 'color:green');
        tituloSenha.textContent = 'Senha';
        senha.setAttribute('style', 'border-color: green');
        validSenha = true;
    }
})

function cadastrar(){
    if (validNome == false && validUsuario == false && validData == false && validSenha == false) {
        msgErro.setAttribute('style', 'display: block');
        msgErro.innerHTML = '<strong>Preencha todos os campos corretamente</strong>';
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none');
    }else{
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push({
            nomeCad: nome.value,
            usuarioCad: usuario.value,
            dataCad: data.value,
            senhaCad: senha.value
        }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser));
        msgSuccess.setAttribute('style', 'display: block');
        msgSuccess.innerHTML = '<strong>Cadastrando Usuario...</strong>';
        msgErro.setAttribute('style', 'display: none');
        msgErro.innerHTML = '';

        setTimeout(() => {
            window.location.href = 'Login.html';
        }, 3000)
        
    }
}