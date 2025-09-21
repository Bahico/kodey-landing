'use client';

export const scrollToId = (id: string) => {
    setTimeout(() => {
        const el = document.querySelector("#" + id);
        if (el) {
            el.scrollIntoView({behavior: "smooth"});
        }
    }, 2000)
};