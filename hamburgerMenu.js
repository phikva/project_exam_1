

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuLaunch = document.querySelector(".next-launch-container");
const menuNav = document.querySelector(".menu-nav");

const navItem = document.querySelectorAll(".nav-item");


let showMenu = false;


   
    menuBtn.addEventListener("click", toggleMenu);
    function toggleMenu() {
      if (!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuLaunch.classList.add("show");
        menuNav.classList.add("show");
        navItem.forEach(item => item.classList.add("show"));
    
    
        showMenu = true;
      } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuLaunch.classList.remove("show");
        menuNav.classList.remove("show");
        navItem.forEach(item => item.classList.remove("show"));
    
    
        showMenu = false;
      }
    }





