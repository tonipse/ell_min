document.getElementById("icon").addEventListener("click", toggle);

let tl = gsap.timeline();

tl.from(".topper", { duration: 1, y: -1000 });

t = false;

function toggle() {
   t = !t;

   if (t === true) {
      let burgerAnimation = gsap.timeline();

      burgerAnimation.to("#menu", { ease: "power2.inOut", duration: 1, x: 0 }).to(".ham-link", { ease: "power2.inOut", duration: 0.7, x: 0, opacity: 1 }, "-=0.5");

      console.log("clicked");
   }
   if (t === false) {
      let burgerAnimation = gsap.timeline();

      burgerAnimation.to("#menu", { ease: "power2.inOut", duration: 1, css: { transform: "translateX(100%)" } }).to(".ham-link", { ease: "power2.inOut", duration: 0.2, x: 100, opacity: 0 });

      console.log("clicked");
   }
}
