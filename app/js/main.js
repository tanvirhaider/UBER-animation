

console.log("this is the main function");


function animateBox1 () {

    TweenLite.set("#box-1-minutehand",{transformOrigin:"left 50%",rotation:-90})
    TweenLite.set("#box-1-hourhand",{transformOrigin:"left 50%",rotation:-90})

    TweenLite.to("#box-1-minutehand", 15, {ease: Power0.easeNone,rotation:760});
    TweenLite.to("#box-1-hourhand", 15, {ease: Power0.easeNone,rotation:300});
}


function animateBox3 () {
    //  clip: rect(80px, 250px, 250px, 130px);
    TweenLite.set("#bag-fill",{clip:"rect(250px, 250px, 250px, 130px"})
    TweenLite.to("#bag-fill",10,{ease: Power0.easeNone,clip:"rect(80px, 250px, 250px, 130px"})
}


animateBox1 ();
animateBox3 ();