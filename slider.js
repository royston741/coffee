const slide = [
  {
    slideHeading: "The best coffee shop",
    slideText:
      "College student love to go places where they can spend more time and have a hot coffee with there friends or with there loved ones.CCD is the good place to hangout with friends.",
    slideImg: 'faceimg/f1.jpg"',
    slideName: "Royston",
    slideLocation: "Lisbon, Portugal",
  },

  {
    slideHeading: "The best coffee ever",
    slideText:
      "Ordered for the king cappuccino for three people during our visitAnd all of the three were pretty delicious, creamy and foamy .CCD is a good place to hangout after college for a good cup of strong coffee",
    slideImg: 'faceimg/f2.jpg"',
    slideName: "Tom",
    slideLocation: "San Francisco, USA",
  },

  {
    slideHeading: "The best coffee",
    slideText:
      "i just love to spend time.here with friends and have their coffee ! CCD is always and everytime.my favourite and i love it ! You must visit here ! You will love if for.sure",
    slideImg: 'faceimg/f3.jpg"',
    slideName: "Sam",
    slideLocation: "London, UK ",
  },
];

const slider = document.querySelector(".slider");

slide.forEach((s, i) => {
  const html = `
  <div class="slide slide-1">
  <h1 class="slide_heading">${s.slideHeading}</h1>
  <p class="slide_text">${s.slideText}</p>
  <div class="img_name_addr">
      <img src="${s.slideImg}" alt="" class="slide_face_img">
      <div class="name_address">
          <h3 class="name">${s.slideName}</h3>
          <p class="address">${s.slideLocation}</p>
      </div>
  </div>

</div>  
  `;
  slider.insertAdjacentHTML("afterbegin",html);
});


// select all the slides
const slides = document.querySelectorAll(".slide");

// select the left btn
const btnLeft = document.querySelector(".slider__btn--left");

// select the right btn
const btnRight = document.querySelector(".slider__btn--right");

let curSlide = 0;

// maximum slide
const maxSlide = slides.length;

const goToSlide = (slide) => {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

// select all the slide and align it into horzpontal position :0%,100%,200%
// slides.forEach((s,i)=>{
//     s.style.transform=`translateX(${100*i}%)`
// })

goToSlide(0);

const nextSlide = () => {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

const prevSlide = () => {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

// on right click
btnRight.addEventListener("click", nextSlide);

// on left click
btnLeft.addEventListener("click", prevSlide);

// on arrow click
document.addEventListener("keydown", (e) => {
  if (e.key == "ArrowLeft") {
    prevSlide();
  } else if (e.key === "ArrowRight") {
    nextSlide();
  }
});
