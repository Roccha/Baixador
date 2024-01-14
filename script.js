function clicar(){

    var logar = document.getElementById('login').value;

    var idade1 = document.getElementById('idade').value;

    var senha = document.getElementById('senha').value;

    if(logar == "admin" && senha == "admin" && idade1 >= 18){
        alert('Conectando...');
        location.href ="home.html";
        
    }else{
        alert('Usuario ou senha inválidos, você precisar ter mais de 18 anos.');
    }

}