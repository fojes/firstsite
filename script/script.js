/* Top Navbar*/
function myFunction(y) {
  y.classList.toggle("change");
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let amContainer = document.getElementById("myMenu");
let ams = amContainer.getElementsByClassName("am");
for (let i = 0; i < ams.length; i++) {
  ams[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("activ");
    current[0].className = current[0].className.replace(" activ", "");
    this.className += " activ";
  });
}
let afContainer = document.getElementById("footermenu");
let afs = afContainer.getElementsByClassName("af");
for (let i = 0; i < afs.length; i++) {
  afs[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("activ");
    current[0].className = current[0].className.replace(" activ", "");
    ams[i].className += " activ";
  });
}


/*Slider*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}   
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


/*Contact us*/
const ny = document.querySelector('.ny');
ny.addEventListener('click', NY);
const info = document.querySelector('.info');
function NY() {
    document.getElementById("m").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445134!2d-74.25986613799749!3d40.697149417741365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodC_0L7Qu9GD0YfQtdC90ZYg0KjRgtCw0YLQuCDQkNC80LXRgNC40LrQuA!5e0!3m2!1suk!2sua!4v1626459642092!5m2!1suk!2sua";
    info.innerHTML = `<p class="titleinfo">New York</p>
    <span class="basicinfo">
      2005 Stokes Isle Apt,896, 
    </span>
    <br>
    <span class="basicinfo">
      Venaville, New York 10010
    </span>
    <br>
    <br>
    <img src="https://img.icons8.com/pastel-glyph/2x/clock--v2.png" class="mi" alt="image">
    <span class="title2info">Wokr Schedule</span><br>
    <span style="font-weight: bold;" class="basicinfo">Mon-Sat:</span>
      <span class="basicinfo" style="margin-left:0px">11:00-19:00</span>
      <br>
      <span style="font-weight: bold;" class="basicinfo">Sun:</span>
      <span class="basicinfo" style="margin-left:0px">11:00-16:00</span><br><br>
    <img src="https://cdn.iconscout.com/icon/free/png-256/phone-call-16-1172958.png" class="mi" alt="image">
    <span class="title2info">Head Office</span><br>
    <span class="basicinfo">(0043) 568 456 902</span><br>
    <span class="basicinfo">(0043) 568 456 902</span><br><br>
    <img src="https://cdn.icon-icons.com/icons2/2098/PNG/128/mail_icon_128820.png" class="mi" alt="image">
    <span class="title2info">Head Office</span><br>
    <span class="basicinfo">hello@pad.architercure</span><br>
    <span class="basicinfo">support@pad.architercure</span>`;
}

const la = document.querySelector('.la');
la.addEventListener('click', LA);
function LA() {
    document.getElementById("m").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2740658098!2d-118.69192119136834!3d34.020161304907774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z0JvQvtGBLdCQ0L3QtNC20LXQu9C10YEsINCa0LDQu9GW0YTQvtGA0L3RltGPLCDQodC_0L7Qu9GD0YfQtdC90ZYg0KjRgtCw0YLQuCDQkNC80LXRgNC40LrQuA!5e0!3m2!1suk!2sua!4v1626526602734!5m2!1suk!2sua";
    info.innerHTML = `<p class="titleinfo">Los Angeles</p>
    <span class="basicinfo">
      2005 Stokes Isle Apt,896, 
    </span>
    <br>
    <span class="basicinfo">
      Los Angeles 10010
    </span>
    <br>
    <br>
    <img src="https://img.icons8.com/pastel-glyph/2x/clock--v2.png" class="mi" alt="image">
    <span class="title2info">Wokr Schedule</span><br>
    <span style="font-weight: bold;" class="basicinfo">Mon-Sat:</span>
      <span class="basicinfo" style="margin-left:0px">11:00-19:00</span>
      <br>
      <span style="font-weight: bold;" class="basicinfo">Sun:</span>
      <span class="basicinfo" style="margin-left:0px">11:00-16:00</span><br><br>
    <img src="https://cdn.iconscout.com/icon/free/png-256/phone-call-16-1172958.png" class="mi" alt="image">
    <span class="title2info">Head Office</span><br>
    <span class="basicinfo">(0043) 568 456 902</span><br>
    <span class="basicinfo">(0043) 568 456 902</span><br><br>
    <img src="https://cdn.icon-icons.com/icons2/2098/PNG/128/mail_icon_128820.png" class="mi" alt="image">
    <span class="title2info">Head Office</span><br>
    <span class="basicinfo">hello@pad.architercure</span><br>
    <span class="basicinfo">support@pad.architercure</span>`;
}

const bn = document.querySelector('.bn');
bn.addEventListener('click', BN);
function BN() {
    document.getElementById("m").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188820.80503152136!2d-71.1103679418445!3d42.31426470218412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2z0JHQvtGB0YLQvtC9LCDQnNCw0YHRgdCw0YfRg9GB0LXRgtGBLCDQodC_0L7Qu9GD0YfQtdC90ZYg0KjRgtCw0YLQuCDQkNC80LXRgNC40LrQuA!5e0!3m2!1suk!2sua!4v1626529024797!5m2!1suk!2sua";
    info.innerHTML = `<p class="titleinfo">Boston</p>
    <span class="basicinfo">
      2005 Stokes Isle Apt,896, 
    </span>
    <br>
    <span class="basicinfo">
      Boston 10010
    </span>
    <br>
    <br>
    <img src="https://img.icons8.com/pastel-glyph/2x/clock--v2.png" class="mi" alt="image">
    <span class="title2info">Wokr Schedule</span><br>
    <span style="font-weight: bold;" class="basicinfo">Mon-Sat:</span>
      <span class="basicinfo" style="margin-left:0px">11:00-19:00</span>
      <br>
      <span style="font-weight: bold;" class="basicinfo">Sun:</span>
      <span class="basicinfo" style="margin-left:0px">11:00-16:00</span><br><br>
    <img src="https://cdn.iconscout.com/icon/free/png-256/phone-call-16-1172958.png" class="mi" alt="image">
    <span class="title2info">Head Office</span><br>
    <span class="basicinfo">(0043) 568 456 902</span><br>
    <span class="basicinfo">(0043) 568 456 902</span><br><br>
    <img src="https://cdn.icon-icons.com/icons2/2098/PNG/128/mail_icon_128820.png" class="mi" alt="image">
    <span class="title2info">Head Office</span><br>
    <span class="basicinfo">hello@pad.architercure</span><br>
    <span class="basicinfo">support@pad.architercure</span>`;
}

const dt = document.querySelector('.dt');
dt.addEventListener('click', DT);
function DT() {
    document.getElementById("m").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188705.6713480454!2d-83.23928893649871!3d42.35262574153409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824ca0110cb1d75%3A0x5776864e35b9c4d2!2z0JTQtdGC0YDQvtC50YIsINCc0ZbRh9C40LPQsNC9LCDQodC_0L7Qu9GD0YfQtdC90ZYg0KjRgtCw0YLQuCDQkNC80LXRgNC40LrQuA!5e0!3m2!1suk!2sua!4v1626529224730!5m2!1suk!2sua";
    info.innerHTML = `<p class="titleinfo">Detroit</p>
    <span class="basicinfo">
      2005 Stokes Isle Apt,896, 
    </span>
    <br>
    <span class="basicinfo">
      Detroit 10010
    </span>
    <br>
    <br>
    <img src="https://img.icons8.com/pastel-glyph/2x/clock--v2.png" class="mi" alt="image">
    <span class="title2info">Wokr Schedule</span><br>
    <span style="font-weight: bold;" class="basicinfo">Mon-Sat:</span>
      <span class="basicinfo" style="margin-left:0px">11:00-19:00</span>
      <br>
      <span style="font-weight: bold;" class="basicinfo">Sun:</span>
      <span class="basicinfo" style="margin-left:0px">11:00-16:00</span><br><br>
    <img src="https://cdn.iconscout.com/icon/free/png-256/phone-call-16-1172958.png" class="mi" alt="image">
    <span class="title2info">Head Office</span><br>
    <span class="basicinfo">(0043) 568 456 902</span><br>
    <span class="basicinfo">(0043) 568 456 902</span><br><br>
    <img src="https://cdn.icon-icons.com/icons2/2098/PNG/128/mail_icon_128820.png" class="mi" alt="image">
    <span class="title2info">Head Office</span><br>
    <span class="basicinfo">hello@pad.architercure</span><br>
    <span class="basicinfo">support@pad.architercure</span>`;
}

/*Slider Team*/
let slideIndext = 1;
showSlidest(slideIndext);

function plusSlidest(n) {
  showSlidest(slideIndext += n);
}

function showSlidest(n) {
  let i;
  let slides = document.getElementsByClassName("team");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndext-1].style.display = "block";  
  
}
