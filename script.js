document.addEventListener('DOMContentLoaded', function() {
let vector = document.getElementsByClassName('Vector');
let menu0 = document.getElementsByClassName('men1');
let isListVisible = false;
vector[0].addEventListener('click', function() {
    if (isListVisible) {
        for(let key of menu0){
            key.style.display = 'none';
        }
      isListVisible = false;
    } else {
        for(let key of menu0){
            key.style.display = 'block';
        }
      isListVisible = true;
    }
  });
let menu1 = document.getElementsByClassName('men');
let isListVisible1 = false;
vector[1].addEventListener('click', function() {
    if (isListVisible1) {
        for(let key of menu1){
            key.style.display = 'none';
        }
      isListVisible1 = false;
    } else {
        for(let key of menu1){
            key.style.display = 'block';
        }
      isListVisible1 = true;
    }
  });
  let menu2 = document.getElementsByClassName('men2');
let isListVisible2 = false;
vector[2].addEventListener('click', function() {
    if (isListVisible2) {
        for(let key of menu2){
            key.style.display = 'none';
        }
      isListVisible2 = false;
    } else {
        for(let key of menu2){
            key.style.display = 'block';
        }
      isListVisible2 = true;
    }
  });
  let menu3 = document.getElementsByClassName('men3');
let isListVisible3 = false;
vector[3].addEventListener('click', function() {
    if (isListVisible3) {
        for(let key of menu3){
            key.style.display = 'none';
        }
      isListVisible3 = false;
    } else {
        for(let key of menu3){
            key.style.display = 'block';
        }
      isListVisible3 = true;
    }
  });
  let menu4 = document.getElementsByClassName('men4');
let isListVisible4 = false;
vector[4].addEventListener('click', function() {
    if (isListVisible4) {
        for(let key of menu4){
            key.style.display = 'none';
        }
      isListVisible4 = false;
    } else {
        for(let key of menu4){
            key.style.display = 'block';
        }
      isListVisible4 = true;
    }
  });
});