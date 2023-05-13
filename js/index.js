const headerEl = document.querySelector("header");

const navBtn = document.querySelector(".btn-mobile-nav");

navBtn.addEventListener("click", () => {
  headerEl.classList.toggle("open-nav");
});

const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    if (link.classList.contains("menu-link")) {
      headerEl.classList.toggle("open-nav");
    }
  });
});

// observe
const homeEl = document.querySelector(".home");

const obs = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];

    console.log(entry);

    // isintersecting = is element is on the screen
    //intersectingRatio = how many perscent of element is visible on the viewport

    // threshold = 1 => only when element visible 100 percent on the screen

    if (!entry.isIntersecting) {
      document.querySelector("main").classList.add("sticky");
    }

    if (entry.isIntersecting) {
      document.querySelector("main").classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
  }
);

obs.observe(homeEl);
