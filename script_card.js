
document.addEventListener('DOMContentLoaded', function() {
let new_img = localStorage.getItem("imagePath");
let new_name = localStorage.getItem("name");
let name = document.querySelector(".h2");
let img = document.querySelector(".big_p");
let img2 = document.getElementsByClassName("little_p");
img.src = new_img;
for(let key of img2){
    key.src = new_img;
}
name.textContent = new_name;
});

