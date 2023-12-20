let i = document.querySelector(" .aa i");
let link = document.querySelectorAll("link");
let img = document.querySelector(" .sec2 img");

function dark (){
    if (i.classList.contains("fa-moon")){
        link[1].href="./css/main.css";
        i.classList.replace("fa-moon","fa-sun")
    }
    else{
        link[1].href="./css/dark.css";
        i.classList.replace("fa-sun","fa-moon")
    }
}
i.addEventListener("click" , dark);