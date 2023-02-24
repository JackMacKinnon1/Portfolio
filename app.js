const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const transition = document.querySelector('.transition');

// nav bar animation
const controls = document.querySelector(".controls");

document.addEventListener("mousemove", (event) => {
    if (event.clientX > window.innerWidth - (sectBtns[0].offsetWidth + sectBtns[0].clientWidth + 5)) {
        controls.style.right = "0";
    } else {
        controls.style.right = "-200px";
    }
});

function perform_transition() {

}

function PageTransitions() {
    // Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        });
    }

    // showing sections
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            transition.style.display = 'block';
            transition.classList.add('show')
            setTimeout(() => {
                // remove selected from other buttons
                sectBtns.forEach((btn) => {
                    btn.classList.remove('active')
                })
                e.target.classList.add('active')

                // hide other sections
                sections.forEach((section) => {
                    section.classList.remove('active')
                })
                const element = document.getElementById(id)
                element.classList.add('active')

                transition.classList.remove('show')
            }, 1000);
        }
    })
}


PageTransitions();