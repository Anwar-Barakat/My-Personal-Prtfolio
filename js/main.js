//!================================
//!======= Add Class when Scrolling :
function scrollHeader() {
    const header = document.getElementById('header');

    if (this.scrollY >= 50)
        header.classList.add('scroll-header');
    else
        header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);


//!================================
//!======= MUXITUP : 
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});


//!================================
//!======= Link Active Work :
const linkWork = document.querySelectorAll('.work__item');

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkWork.forEach(l => l.addEventListener('click', activeWork))


//!================================
//!======= Scroll Sections Active Link :
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
            document.querySelector('.nav__menu a[href*=' + sectionId + ' ]').classList.add('active-link');
        else
            document.querySelector('.nav__menu a[href*=' + sectionId + ' ]').classList.remove('active-link');
    })
}
window.addEventListener('scroll', scrollActive);


//!================================
//!======= Light & Dark Theme :
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon == 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
});

//!================================
//!======= Scroll REVEAL :
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, { delay: 700 })
sr.reveal(`.home__social,.home__scroll`, { delay: 900, origin: 'bottom' })


//!====================================
//!======= Progress Bar On Scrolling :
const skillSection = document.getElementById('progress-section'),
    progressBars = document.querySelectorAll('.skills_level-progress');

window.addEventListener('scroll', () => {
    const sectionPosition = skillSection.getBoundingClientRect().top,
        screenPosition = window.innerHeight / 2;

    if (sectionPosition < screenPosition) {
        progressBars.forEach(progressBar => {
            const value = progressBar.dataset.progress;
            progressBar.style.opacity = 1;
            progressBar.style.width = `${value}%`;
            progressBar.querySelector('span').style.opacity = 1;

            let counter = 0;
            setInterval(() => {
                if (counter == value) {
                    clearInterval()
                } else {
                    counter += 1;
                    progressBar.querySelector('span').innerHTML = counter + "%";
                }
            }, 25)
        });
    } else {
        progressBars.forEach(p => {
            const value = p.dataset.progress;
            p.style.opacity = 0;
            p.style.width = 0;
            p.querySelector('span').style.opacity = 0;
        });
    }

    let upto = 0;




});