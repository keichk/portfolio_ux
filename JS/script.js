const showMenu = (toggleID,navID) =>{
    const toggle = document.getElementById(toggleID),
    nav = document.getElementById(navID);
   if(toggle && nav){
       toggle.addEventListener('click', function(){
           nav.classList.toggle('show')
       })
   }

}
showMenu('nav-toggle','nav-menu')
/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));





/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.Intro',{});
sr.reveal('.Accueil_img',{delay: 400});
sr.reveal('.social-network',{ interval: 200});

/*SCROLL ABOUT*/
sr.reveal('.profile_image',{}); 
// sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about-text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.titre-comp',{}); 
sr.reveal('.text_competence',{}); 
sr.reveal('.compt_techno',{interval: 200}); 
sr.reveal('.skills_img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.img-realisation',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 