/** Scrollytelling */

// timeline - preplace pages off screen
const pageAnimations = gsap.timeline();

pageAnimations.from(".two", {yPercent: 100})
.from(".three", {yPercent: 100})
.from(".four", {yPercent: 100})
.from(".five", {yPercent: 100})
.from(".six", {yPercent: 100})
.from(".seven", {yPercent: 100})
.from(".eight", {yPercent: 100})
// .from(".nine", {yPercent: 100})
// .from(".ten", {yPercent: 100})


// "self contained" ScrollTrigger
ScrollTrigger.create({
    animation: pageAnimations,
    trigger: "article",
    start: "top top",
    end: "+=1000%",
    scrub: true,
    pin: true,
});


/** Interactive Element – Timeline Map */
const date_buttons = document.getElementsByName("date-button")
const photo = document.querySelector("#timeline_map")

function change_date(date) {
    photo.src = "images/" + date + ".png"
}

date_buttons.forEach(button => {
    button.addEventListener("change", event =>{
        change_date(button.value)
    })
})


/** Interactive Element - Outfit Slideshow */
$('.card').click(function(){
    $(this).toggleClass('flipped');
 }) 
 
function hover1(){
    gsap.to(".label1", {opacity:1, duration:0.1});
    gsap.set(".label2", {opacity:0});
    gsap.set(".label3", {opacity:0});
    gsap.set(".label4", {opacity:0});
    gsap.set(".label5", {opacity:0});
}

function hover2(){
    gsap.set(".label1", {opacity:0});
    gsap.to(".label2", {opacity:1, duration:0.1});
    gsap.set(".label3", {opacity:0});
    gsap.set(".label4", {opacity:0});
    gsap.set(".label5", {opacity:0});
}

function hover3(){
    gsap.set(".label1", {opacity:0});
    gsap.set(".label2", {opacity:0});
    gsap.to(".label3", {opacity:1, duration:0.1});
    gsap.set(".label4", {opacity:0});
    gsap.set(".label5", {opacity:0});
}

function hover4(){
    gsap.set(".label1", {opacity:0});
    gsap.set(".label2", {opacity:0});
    gsap.set(".label3", {opacity:0});
    gsap.to(".label4", {opacity:1, duration:0.1});
    gsap.set(".label5", {opacity:0});
}
 
function hover5(){
    gsap.set(".label1", {opacity:0});
    gsap.set(".label2", {opacity:0});
    gsap.set(".label3", {opacity:0});
    gsap.set(".label4", {opacity:0});
    gsap.to(".label5", {opacity:1, duration:0.1});
}
