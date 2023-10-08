//function that does the animation for the hamburger menu on mobile
window.onload = function(){
    const menu_button = document.querySelector('.hamburger');
    menu_button.addEventListener('click',function(){
        menu_button.classList.toggle("is-active");
    })
}

//it opens linkedin when clicking the linkedin button
function openLinkedin(){
    window.open("https://www.linkedin.com/in/marcodeltogno/","_self");
}
