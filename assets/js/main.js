/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = ()=>{
  const header  = document.getElementById('header');
  this.scrollY >=50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
}

window.addEventListener("scroll", scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/
  const scrollUp = ()=>{
    const scroll = document.getElementById('scroll-up');

    this.scrollY >= 350 ? scroll.classList.add('scroll-show') : scroll.classList.remove('scroll-show');
  }

  window.addEventListener('scroll' , scrollUp)
/*=============== SCROLL REVEAL ANIMATION ===============*/
  const sr = ScrollReveal({
    origin : 'top',
    distance : '60px',
    duration : 2500,
    delay : 400,
  })

  sr.reveal(`.home__data , .footer__container , .footer__group`)
  sr.reveal(`.home__img`, {delay: 700 , origin: 'bottom'})
  sr.reveal(`.program__card , .pricing__card`, {interval:100})
  sr.reveal(`.choose__img , .calculate__content`, {origin: 'left'})
  sr.reveal(`.choose__content , .calculate__img`, {origin: 'right'})
/*=============== CALCULATE JS ===============*/

const calculateForm = document.getElementById('calculate-form'),
      calculateCm = document.getElementById('calculate-cm'),
      calculateMessage = document.getElementById('calculate-message'),
      calculateKg = document.getElementById('calculate-kg');

const calculateBmi = (e)=>{
      e.preventDefault();
      if(calculateCm.value === '' || calculateKg.value === ''){
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        calculateMessage.textContent = "Fill in the Height and Weight 👍"; 

        setTimeout(() => {
        calculateMessage.textContent = ""; 
        }, 3000);
      }
      else{
        const cm = calculateCm.value /100,
              kg = calculateKg.value,
              bmi = Math.round( kg / ( cm * cm ) );
              
        if(bmi< 18.5){
          calculateMessage.classList.add('color-green')
          calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny 😢`
        }else if(bmi<25){
          calculateMessage.classList.add('color-green')
          calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy👌`
        }
        else{
          calculateMessage.classList.add('color-green')
          calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight 🥲`
        }

        calculateCm.value = ''
        calculateKg.value = ''

        setTimeout(()=>{
          calculateMessage.textContent = ''
        },4000)
      }
}

calculateForm.addEventListener('submit', calculateBmi)
/*=============== EMAIL JS ===============*/
