/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    menuToggle.classList.toggle("active");

});


/* Close menu when clicking a link */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.classList.remove("active");

    });

});


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =====================================================
   REVEAL ANIMATION
===================================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");

function updateActiveNavigation() {

    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        const sectionId = section.getAttribute("id");

        const correspondingLink =
            document.querySelector(
                `.nav-link[href="#${sectionId}"]`
            );

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

            });

            if (correspondingLink) {

                correspondingLink.classList.add("active");

            }

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* =====================================================
   SMOOTH SCROLL
===================================================== */

navLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (
            targetId &&
            targetId.startsWith("#")
        ) {

            event.preventDefault();

            const target =
                document.querySelector(targetId);

            if (target) {

                const offset = 70;

                const targetPosition =
                    target.offsetTop - offset;

                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }

        }

    });

});


/* =====================================================
   MOUSE PARALLAX HERO
===================================================== */

const hero = document.querySelector(".hero");

const circles = document.querySelectorAll(".circle");

hero.addEventListener("mousemove", (event) => {

    const x =
        (window.innerWidth / 2 - event.clientX) / 50;

    const y =
        (window.innerHeight / 2 - event.clientY) / 50;

    circles.forEach((circle, index) => {

        const speed = (index + 1) * 0.5;

        circle.style.transform =
            `translate(${x * speed}px, ${y * speed}px)`;

    });

});


/* =====================================================
   DYNAMIC YEAR
===================================================== */

const currentYear = new Date().getFullYear();

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    copyright.textContent =
        `© ${currentYear} Fulan. All Rights Reserved.`;

}


/* =====================================================
   PAGE LOADED
===================================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
