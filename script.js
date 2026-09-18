/* =====================================================
   ZERODAY ACADEMY
   Lightweight Interactive System
   ===================================================== */


/* ================= BOOT STATUS ================= */

const bootStatus = document.getElementById("bootStatus");

const bootMessages = [
    "INITIALISING LEARNING GRID...",
    "LOADING SECURITY MODULES...",
    "CONNECTING KNOWLEDGE CORE...",
    "CHECKING SYSTEM STATUS...",
    "ACCESS GRANTED."
];

let bootIndex = 0;

if (bootStatus) {

    const bootMessageTimer = setInterval(() => {

        bootIndex++;

        if (bootIndex < bootMessages.length) {
            bootStatus.textContent = bootMessages[bootIndex];
        }

        if (bootIndex >= bootMessages.length - 1) {
            clearInterval(bootMessageTimer);
        }

    }, 240);

}


/* ================= CLOCK ================= */

const clock = document.getElementById("clock");

function updateClock() {

    if (!clock) return;

    const now = new Date();

    clock.textContent = now.toLocaleTimeString(
        [],
        {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        }
    );
}

updateClock();

setInterval(updateClock, 1000);


/* ================= YEAR ================= */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("open");

        const icon = menuToggle.querySelector("i");

        if (!icon) return;

        if (navLinks.classList.contains("open")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            const icon = menuToggle.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    });

}


/* ================= PARTICLES ================= */

const particleContainer = document.getElementById("particles");

if (particleContainer) {

    const particleCount =
        window.innerWidth < 600 ? 18 : 32;

    for (let i = 0; i < particleCount; i++) {

        const particle = document.createElement("span");

        particle.className = "particle";

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.top =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            (5 + Math.random() * 7) + "s";

        particle.style.animationDelay =
            (Math.random() * 5) + "s";

        particleContainer.appendChild(particle);

    }

}


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {
        observer.observe(element);
    });

} else {

    revealElements.forEach(element => {
        element.classList.add("visible");
    });

}


/* ================= ACTIVE NAV ================= */

const sections =
    document.querySelectorAll("main section[id]");

const navItems =
    document.querySelectorAll(".nav-link");


if ("IntersectionObserver" in window) {

    const sectionObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;

                    const id =
                        entry.target.getAttribute("id");

                    navItems.forEach(link => {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            "#" + id
                        ) {
                            link.classList.add("active");
                        }

                    });

                });

            },
            {
                rootMargin: "-30% 0px -60% 0px"
            }
        );


    sections.forEach(section => {
        sectionObserver.observe(section);
    });

}


/* ================= HERO CORE PARALLAX ================= */


/* ================= CONSOLE EASTER EGG ================= */

console.log(
`
╔══════════════════════════════════╗
║       ZERODAY ACADEMY            ║
║       CYBER LEARNING GRID        ║
╠══════════════════════════════════╣
║ SYSTEM       : ONLINE            ║
║ LEARNING     : ACTIVE            ║
║ SECURITY     : RESPONSIBLE       ║
║ ACCESS       : OPEN              ║
╚══════════════════════════════════╝

Welcome, learner. 🚀
`
);


/* ================= SAFETY FALLBACK ================= */

/*
   If something unexpected happens in JavaScript,
   the CSS boot animation STILL removes the boot screen.
*/

window.addEventListener("load", () => {

    document.body.classList.add("page-ready");

});
