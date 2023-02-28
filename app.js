(function() {
    const sections = document.querySelectorAll('.section')
    const sectBtns = document.querySelectorAll('.controls')
    const sectBtn = document.querySelectorAll('.control')
    const allSections = document.querySelector('.main-content')
    const transition = document.querySelector('.transition')
    const seeMorePort = document.querySelector('.view-more')
    const hiddenElements = document.querySelectorAll('.hidden')
    // nav bar animation
    const controls = document.querySelector(".controls")

    

    
    // plays animation to view rest of profile
    setTimeout(() => {
        seeMorePort.classList.add('pop-in')
        document.addEventListener("mousemove", (event) => {
            if (event.clientX > window.innerWidth - (sectBtns[0].offsetWidth + sectBtns[0].clientWidth + 15)) {
                controls.style.right = "0";
            } else {
                controls.style.right = "-200px";
            }
        });
    }, 2000)
    
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
                if (transition.classList.contains('show')) {
                    transition.classList.remove('show')
                } else {
                    transition.classList.add('show')
                }
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
                    setTimeout(() => {
                        //console.log(transition)
                        //console.log(transition.classList.contains('show'))
                        //transition.classList.remove('show')
                        transition.style.display = 'block'
                    }, 500)
                }, 500);
            }
        })
    }
    
    
    PageTransitions();

    //scrolling animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            } 
            else {
                entry.target.classList.remove('show')
            }
        })
    })

    hiddenElements.forEach((el) => observer.observe(el))
})();