//function that does the animation for the hamburger menu on mobile
window.onload = function(){
    const menu_button = document.querySelector('.hamburger');
    const menu=document.querySelector('.mobile-menu');
    menu_button.addEventListener('click',function(){
        menu_button.classList.toggle("is-active");
        menu.classList.toggle("is-active");
    })
    const team_button = document.querySelector('.team-button');
    team_button.addEventListener('click',function(){
        team_button.classList.toggle("is-active");
    })
    /*const projects_button
    const departments_button*/
}

//it opens linkedin when clicking the linkedin button
function openLinkedin(){
    window.open("https://www.linkedin.com/in/marcodeltogno/","_self");
}
