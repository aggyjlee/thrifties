// /** Scrollytelling */

// // timeline - preplace pages off screen
// const pageAnimations = gsap.timeline();

// pageAnimations.from(".two", {yPercent: 100})
// .from(".three", {yPercent: 100})
// .from(".four", {yPercent: 100})
// .from(".five", {yPercent: 100})
// .from(".six", {yPercent: 100})
// .from(".seven", {yPercent: 100})
// .from(".eight", {yPercent: 100})
// .from(".nine", {yPercent: 100})
// // .from(".ten", {yPercent: 100})


// // "self contained" ScrollTrigger
// ScrollTrigger.create({
//     animation: pageAnimations,
//     trigger: "article",
//     start: "top top",
//     end: "+=1000%",
//     scrub: true,
//     pin: true,
// });


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
 
function opendrawer1(){
    TweenLite.to($('.iv_infocard') , {autoAlpha: 1, display:'inline-block'});
}

function opendrawer2(){
    TweenLite.to($('.ho_infocard'), {autoAlpha: 1, display:'inline-block'});
}

function opendrawer3(){
    TweenLite.to($('.wl_infocard'), {autoAlpha: 1, display:'inline-block'});
}

function opendrawer4(){
    TweenLite.to($('.rv_infocard'), {autoAlpha: 1, display:'inline-block'});
}
 