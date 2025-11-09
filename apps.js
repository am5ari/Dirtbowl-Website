const menu =document.querySelector('#mobile-menu')
const menuLinks= document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__container')

//Display mobile menu
const mobileMenu=()=>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click',mobileMenu);

// Close mobile menu when a link is clicked
document.querySelectorAll('.navbar__menu li a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    });
});

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#Home-link')
    const aboutMenu = document.querySelector('#About-link')
    const winnersMenu = document.querySelector('#History-link')
    const schedulesMenu = document.querySelector('#Schedule-link')
    const statsMenu = document.querySelector('#Stats-Link')
    let scrollPos = window.scrollY
    console.log(scrollPos);

    // adds 'hightlights' class to main menu items
    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        winnersMenu.classList.remove('highlight');
        schedulesMenu.classList.remove('highlight');
        statsMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 3000) {
      winnersMenu.classList.add('highlight');
      aboutMenu.classList.remove('highlight');
      homeMenu.classList.remove('highlight');
        schedulesMenu.classList.remove('highlight');
        statsMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 3600) {
      schedulesMenu.classList.add('highlight');
      winnersMenu.classList.remove('highlight');
      homeMenu.classList.remove('highlight');
        aboutMenu.classList.remove('highlight');
        statsMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 5000) {
      statsMenu.classList.add('highlight');
      schedulesMenu.classList.remove('highlight');
        return;
    } 

    if((elem && window.innerWidth <960 && scrollPos <600) || elem) {
        elem.classList.remove('highlight');
    }

}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });

