window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

let menu = document.querySelector('.menu');
let list = document.querySelector('ul');



const scrollUp = document.querySelector('.scrollUp');
window.addEventListener('scroll', function() {
    const scrollUp = document.querySelector('.scrollUp');
    if (window.scrollY > 400) {
        scrollUp.style.display = "block";

    } else {
        scrollUp.style.display = "none";
    }
});

scrollUp.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
})



menu.addEventListener('click',()=>{
    list.classList.toggle('show');

    let menuchild = menu.firstElementChild;
    if(list.classList.contains('show')){
        menuchild.classList.replace('fa-bars','fa-xmark');
    }
    else{
        menuchild.classList.replace('fa-xmark','fa-bars');
    }
})

const accordian = document.querySelectorAll('.contentbx');

for (let i = 0; i< accordian.length; i++) {
    accordian[i].addEventListener('click',function(){
        this.classList.toggle('newclass')
        
    })
    
}

const navItem = document.querySelectorAll('.nav-item');
navItem.forEach( function(navItems){
    navItems.addEventListener('click',function(){
        this.classList.add('active');
        
    })
})


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay: true, // Add autoplay option
        autoplayTimeout: 2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
})

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
  });

let preloader = document.querySelector('.preloader');
window.addEventListener("load", ()=>{
    preloader.style.display = "none" ;
})


// let body = document.querySelector('.body')
// let dark = document.querySelector('.btnn');
// dark.addEventListener( 'click', ()=>{
//     body.classList.add('darkest');
// })

// AOS.init({
//     duration: 1000,
//     offset: 400
// });