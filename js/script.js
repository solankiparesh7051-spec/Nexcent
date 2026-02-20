
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

let data = document.querySelectorAll(".count")
let arr = Array.from(data)

arr.map((item) => {
    let startcount = 0;

    let counter = () => {
        startcount++
        item.textContent = startcount;
        if (startcount == item.dataset.number) {
            clearInterval(stop)
        }
    }
    let stop = setInterval(() => {
        counter()
    }, 1)
})


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
                
                settings:{
                     breakpoint:700,
                    slidesToShow:1,
                    slidesToScroll:1,
                }
        }]
    });
});