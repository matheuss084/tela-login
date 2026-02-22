function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
        if(login == "matheus" && senha == "123"){
        alert('Sucesso!'); 
        location.href = "home.html";
        } else {
        alert('Usuário ou senha incorretos'); }
        }   