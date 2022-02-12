// menu bar
const navLinks = document.querySelector(".nav_links");
const menuBtn = document.querySelector(".bars");

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navLinks.classList.toggle("top");
});

// learn more
const section1 = document.querySelector("#section-1");
const learnBtn = document.querySelector(".learnBtn");

learnBtn.addEventListener("click", (e) => {
  e.preventDefault();

  section1.scrollIntoView({ behavior: "smooth" });
});

// nav links
const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    // e.preventDefault()
    navLinks.classList.remove("top");
  });
});

// sticky nav
const nav = document.querySelector(".nav");
const header = document.querySelector('.header');

const stickyNav = enteries => {
  const [entry] = enteries;

  if (!entry.isIntersecting) {
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
  }

};

// create a observer
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null, //root is an element that target is intersecting
  threshold: 0, //percentage of intersection
});

// observe the target
headerObserver.observe(header);


// reveal section 
const allSetion = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0,
});

allSetion.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
