document.addEventListener("DOMContentLoaded", function () {
    let menu = document.querySelector(".list2"); 
    let menuIcon = document.querySelector(".fa-bars");
    let closeIcon = document.querySelector(".fa-xmark");
   
    menuIcon.addEventListener("click", function () {
       console.log("hello");
       menu.classList.toggle("show");  
       menuIcon.style.display = "none"; 
       closeIcon.style.display = "block"; 
    });
  
    closeIcon.addEventListener("click", function () {
       menu.classList.toggle("show"); 
       menuIcon.style.display = "block"; 
       closeIcon.style.display = "none"; 
    });
});
