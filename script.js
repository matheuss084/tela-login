function logar() {
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
        if(login == "matheus" && senha == "123"){
        alert('Sucesso!'); 
        location.href = "home.html";
        } else {
        alert('Usuário ou senha incorretos'); }
        }   