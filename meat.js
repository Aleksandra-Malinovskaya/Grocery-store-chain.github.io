document.addEventListener('DOMContentLoaded', function() {
    let btn = document.getElementsByClassName("btn")
    for(key of btn){
    key.addEventListener('click', function() {
        let imagePath = "../img/meat.jpg";
        let name = "Мясо";
        localStorage.setItem("imagePath", imagePath);
        localStorage.setItem("name", name);
        window.location.href = "./card.html";
        document.location='./card.html'
    });
    }
    });