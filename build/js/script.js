const toggle=document.querySelector("#ham");
let links=document.querySelectorAll(".nav-link")
toggle.addEventListener('click',function(){
    links.forEach(element => {
        element.addEventListener('click',function(){
            toggle.checked=false;
        });
    });
});