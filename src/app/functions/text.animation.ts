import gsap from 'gsap';

export function textAnimation(name: gsap.DOMTarget, trigger: gsap.DOMTarget) {
    gsap.set(name, {opacity: 0, y: 30});

    const tl = gsap.timeline();
    tl.to(name, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: trigger,
            start: 'top 80%',
        },
    });

    return tl;
}

export function textAnimationTl(name: gsap.DOMTarget, trigger: gsap.DOMTarget, tl: gsap.core.Timeline) {
    gsap.set(name, {opacity: 0, y: 30});

    tl.to(name, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: trigger,
            start: 'top 80%',
        },
    });

}