const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click",() => {
        nav.classList.toggle("nav-active");
        // the anime
        navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }   
        
    });
    // burger animation
    burger.classList.toggle("toggle");
    });
    
}

navSlide();

// form and our proprietary technology ;)😂😂🤣😂😂

const form = document.forms[0];

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const { name, amount, task, tax_type, citizenship } = this.elements;
    // or
    // const { name, description, task } = event.target.elements;
    console.log(amount.value, tax_type.value, citizenship.value);

    var x = citizenship.value;
    var y = parseFloat(amount.value) ;
    var z = tax_type.value;
    var babyyoda = x + y + z ;

    // if (y > 3 && z == "vat"){
    //     babyyoda = "its massive";
    // }

    if ( z == "vat") {
        babyyoda = y * 0.12;
    }
    

    document.getElementById("tax_amount").textContent = babyyoda;
});


// change ad and ad link

var image_tracker = 'ad1';
var ad_link = 'https://www.instagram.com/';

function change() {
    var image = document.getElementById('ad_image');
    if (image_tracker == 'ad1') {
        image.src = 'ad1.png';
        ad_link = 'https://www.facebook.com/lisconmovers/';
        image_tracker = 'ad2';
    }
    else if (image_tracker == 'ad2') {
        image.src = 'ad2.png';
        ad_link ='https://www.instagram.com/bluecornofficial/';
        image_tracker = 'ad3';
    }
    else if (image_tracker == 'ad3') {
        image.src = 'ad3.png';
        ad_link = 'https://www.facebook.com/Liscontrans';
        image_tracker = 'ad1';
    }
    // you can add more ads but add image_tracker and last images' image_tracker must be ad1 so that it restarts
    
}

var timer = setInterval('change();', 10000);

// this function is called when the onclick event runs. It stops the timer running.
function stop() {
    window.open(ad_link, '_blank');
}