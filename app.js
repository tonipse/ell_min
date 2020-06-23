document.getElementById("icon").addEventListener("click", toggle);

t = false;

function toggle() {
   t = !t;

   if (t === true) {
      let appear = gsap.timeline();

      appear
         .to("#menu", { css: { display: "flex" } })
         .to("#menu", { ease: "power2.inOut", duration: 1, x: 0 })
         .to(".ham-link", { ease: "power2.inOut", duration: 0.7, x: 0, opacity: 1 }, "-=0.5");
   }
   if (t === false) {
      let disappear = gsap.timeline();

      disappear
         .to("#menu", { ease: "power2.inOut", duration: 1, css: { transform: "translateX(100%)" } })
         .to(".ham-link", { ease: "power2.inOut", duration: 0.2, x: 100, opacity: 0 })
         .to("#menu", { css: { display: "none" } });
   }
}
