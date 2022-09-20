if (screen.width >= 699) {
    mybutton = document.querySelector(".gotop");

    window.onscroll = function (e) {  
        if(window.scrollY > 100){
            mybutton.style.opacity = 1;
        }else{
            mybutton.style.opacity = 0;
        }
    } 
}
