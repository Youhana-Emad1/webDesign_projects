const dots = document.querySelectorAll(".dot")
const slides = document.querySelectorAll(".slide")
const navigation = document.querySelector('#navigation');
const loadingScreen = document.getElementById('loadingScreen');

if (navigation) {
    window.addEventListener('scroll', (e) => {
        if (window.scrollY > 200) {
            navigation.classList.add('sticky-lg-top');
        } else {
            navigation.classList.remove('sticky-lg-top');
        }
    });
}

let current = 0
dots.forEach((dot, i) => {
    dot.addEventListener("click", function () {
        slides.forEach(s => s.classList.remove("active"))
        dots.forEach(s => s.classList.remove("active"))
        dot.classList.add("active")
        slides[i].classList.add("active")
        current = i
        createSlideContent();
    })
})

function createSlideContent() {
    const slide_content = document.querySelector('#slide-content');
    if (slide_content) {
        dots[current].classList.add('active');
        const slide_div = document.createElement('div');
        slide_div.classList.add('slide-content', 'position-absolute', 'top-50', 'start-50', 'translate-middle', 'text-white', 'col-md-6', 'col-sm-6', 'col-lg-12', 'text-center');
        slide_div.id = 'slide_content';
        slide_div.innerHTML = `
            <h1>What You Do Today For Peoples2</h1>
            <p class="lead opacity-75">Lorem ipsum dolor sit amet, consectetuer adipiscing elit uiooenean <br> commodo ligula. elit uiooenean commodo ligula.</p>
            <a href="#" class="btn btn-primary active">get start now</a>
            <a href="#" class="btn btn-primary">contact us</a>
        `;
        document.body.appendChild(slide_div);

        slide_div.style.transition = 'transition all 0.5s';
        
    }
}



for (let i = 0; i < 9000; i++) {
    
    if (loadingScreen) {
    
        window.addEventListener('load', function() {
    
            loadingScreen.style.display = 'none';
        
    
            document.getElementById('content').style.display = 'block';
        });
    } else {
    
        document.getElementById('content').style.display = 'block';
    }
}

