const hamburgerButton = document.querySelector("#hamburgerButton");
const mobileMenu = document.querySelector("#mobileMenu");
let lastKnownScrollPosition = 0;
var clickCount = 0;

hamburgerButton.addEventListener("click", () => {
  clickCount++;
  if (clickCount % 2 == 0) {
    mobileMenu.classList.replace("translate-y-96", "-translate-y-96");
  } else {
    mobileMenu.classList.replace("-translate-y-96", "translate-y-96");
  }
});

document.addEventListener("scroll", function (e) {
  const isNavbar = document.querySelector("#navbar");
  const isNavbarItems = document.querySelector("#navItems");
  lastKnownScrollPosition = window.scrollY;

  console.log(lastKnownScrollPosition);

  if (lastKnownScrollPosition > 50) {
    isNavbar.classList.replace("sm:bg-transparent", "sm:bg-light");
    isNavbarItems.classList.remove("sm:text-white");
  } else if (lastKnownScrollPosition < 50) {
    isNavbar.classList.replace("sm:bg-light", "sm:bg-transparent");
    isNavbarItems.classList.add("sm:text-white");
  }
});
