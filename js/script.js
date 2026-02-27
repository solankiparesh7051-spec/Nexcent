
AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50
});

// Initialize Lenis for smooth scrolling
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

let icon=document.querySelector(".menubar")
let close=document.querySelector("#close-btn")

close.addEventListener("click",function(){
        let menu=document.querySelector(".slide-bar")
         menu.style.display='none'
})

icon.addEventListener("click",function(){
   let menu=document.querySelector(".slide-bar")
   menu.style.display='flex'

  
})

let countSection = document.querySelector(".section-achieve");
let data = document.querySelectorAll(".count");

let observer = new IntersectionObserver((entries, observer) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
        data.forEach((item) => {
            let target = parseInt(item.dataset.number.replace(/,/g, ""));
            let count = 0;
            let speed = target / 10; 

            let updateCount = () => {
                count += speed;
                if (count < target) {
                    item.textContent = Math.floor(count).toLocaleString();
                    requestAnimationFrame(updateCount);
                } else {
                    item.textContent = target.toLocaleString();
                }
            };
            updateCount();
        });
        observer.unobserve(countSection);
    }
}, {
    root: null,
    threshold: 0.2,
});

if(countSection) {
    observer.observe(countSection);
}


$(document).ready(function(){
      $('.content-logos').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        dots: false,
        speed: 300,
        infinite: true,
        autoplaySpeed: 1500,
        autoplay: true,
           responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          
        }
      }
    ]
      
      });
    });



$(document).ready(function(){
      $('.clients-logos').slick({
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows:false,
        dots: false,
        speed: 500,
        infinite: true,
        autoplaySpeed: 1500,
        autoplay: true,
        responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
         
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
            slidesToScroll: 1,
        }
      }
    ]
      });
    });
$(document).ready(function () {
    $('.box').slick({
        arrows: false,
        centerPadding: "0px",
        dots: true,
        slidesToShow: 1,
        infinite: false,
        responsive:[{
                breakpoint: 700,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                }
        }]
    });
});

// Register Form Functionality
let registerForm = document.getElementById("registerForm");
if(registerForm) {
    registerForm.addEventListener("submit", function(e) {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email") ? document.getElementById("email").value : "";
        
        if(name) {
            let subject = "New Registration: " + name;
            let body = "Name: " + name + "\nEmail: " + email;
            
            window.location.href = "mailto:solankiparesh7051@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
            
            setTimeout(function() {
                alert("Registration Successful! Welcome, " + name);
                window.location.href = "index.html";
            },500);
        }
    });
}