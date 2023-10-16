//function that does the animation for the hamburger menu on mobile
window.onload = function(){
    const menu_button = document.querySelector('.hamburger');
    const menu=document.querySelector('.mobile-menu');
    const team_submenu=document.querySelector('.team-submenu');
    const projects_submenu=document.querySelector('.projects-submenu');
    const cross=document.querySelector('.cross');
    menu_button.addEventListener('click',function(){
        menu_button.classList.toggle("is-active");
        menu.classList.toggle("is-active");
        cross.classList.toggle("is-active");
        team_submenu.classList.remove("is-active");
        team_button.classList.remove("is-active");
    })
    const team_button = document.querySelector('.team-button');
    team_button.addEventListener('click',function(){
        team_button.classList.toggle("is-active");
        team_submenu.classList.toggle("is-active");
    })
    const projects_button = document.querySelector('.projects-button');
    projects_button.addEventListener('click',function(){
        projects_button.classList.toggle("is-active");
        projects_submenu.classList.toggle("is-active");
    })

    /*const departments_button*/
    const prova_div= document.querySelector('.photos-table');
    //automazione nel popolare la tabella
    var name = [];

    name[0]=["Davide Paltani","https://www.linkedin.com/in/davide-paltani-99b417190//","https://skywarder.eu/wp-content/uploads/2022/12/davide_paltani2223-225x300.webp","Logistics Member"];

    const nuovo_div=document.createElement("div");
    nuovo_div.innerHTML=`
    <a href="`+name[0][1]+`">
        <img class="photo"
            src="`+name[0][2]+`" />
        <span class="top-right"><i class="fa-brands fa-linkedin-in linkedin-animation"></i></span>
        <div class="name">`+name[0][0]+`</div>
        <div class="role">`+name[0][3]+`</div>
    </a>`
    nuovo_div.classList.add("single-photo");
    prova_div.appendChild(nuovo_div);
}

//it opens linkedin when clicking the linkedin button
function openLinkedin(){
    window.open("https://www.linkedin.com/in/marcodeltogno/","_self");
}
