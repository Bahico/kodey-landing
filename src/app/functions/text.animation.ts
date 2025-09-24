import gsap from 'gsap';

export function textAnimation(name: gsap.DOMTarget, trigger: gsap.DOMTarget, start = "top 60%") {
    gsap.set(name, {opacity: 0, y: 30});

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: trigger,
            start: start,
            toggleActions: "play none none reverse"
        }
    });
    
    tl.to(name, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
    });

    return tl;
}

export function textAnimationTl(name: gsap.DOMTarget, tl: gsap.core.Timeline, duration = 0.5) {
    gsap.set(name, {opacity: 0, y: 30});

    // Add to the existing timeline with a delay for staggered effect
    tl.to(name, {
        opacity: 1,
        y: 0,
        duration: duration,
        ease: 'power3.out',
    }, "+=0.2");
}