
gsap.registerPlugin(ScrollTrigger)

gsap.to(".my-headline span", {
  scrollTrigger: {
    trigger: ".trigger-1",
    start: "top top",
    endTrigger: ".trigger-2",
    end: "top top",
    scrub:3,
    markers: true
  },
  y:"0%",
  ease: 'power2.out',
  stagger: 0.3
})

gsap.to(".my-headline span", {
  scrollTrigger: {
    trigger: ".trigger-2",
    start: "top top",
    endTrigger: ".trigger-3",
    end: "top top",
    scrub:3,
    markers: true
  },
  y:"-100%",
  ease: 'power2.out',
  stagger: 0.3,
  immediateRender: false
})