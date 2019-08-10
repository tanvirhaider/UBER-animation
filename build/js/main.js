"use strict";

console.log("this is the main function");
var animation1;
var animation2;
var animation3;
var animation4;
var animation1initiated = false;
var animation2initiated = false;
var animation3initiated = false;
var animation4initiated = false;

function startAnimation1() {
  if (animation1initiated) {
    animation1.play();
  } else {
    animation1initiated = true;
    animation1 = new TimelineMax();
    animation1.to("#box-1-minutehand", 15, {
      ease: Power0.easeNone,
      rotation: 720 - 90
    });
    animation1.to("#box-1-hourhand", 15, {
      ease: Power0.easeNone,
      rotation: 360 - 90
    }, "-=15");
    animation1.repeat(-1).yoyo(false).play();
  }
}

function pauseAnimation1() {
  animation1.pause();
}

function startAnimation2() {
  if (animation2initiated) {
    animation2.play();
  } else {
    animation2initiated = true;
    animation2 = new TimelineMax();
    animation2.fromTo("#box-2 #star-1 .star-light", 0.25, {
      alpha: 0
    }, {
      ease: Power0.easeNone,
      alpha: 1
    });
    animation2.fromTo("#box-2 #star-2 .star-light", 0.25, {
      alpha: 0
    }, {
      ease: Power0.easeNone,
      alpha: 1
    });
    animation2.fromTo("#box-2 #star-3 .star-light", 0.25, {
      alpha: 0
    }, {
      ease: Power0.easeNone,
      alpha: 1
    });
    animation2.repeat(-1).yoyo(true).play();
  }
}

function pauseAnimation2() {
  animation2.pause();
}

function startAnimation3() {
  if (animation3initiated) {
    animation3.play();
  } else {
    animation3initiated = true;
    animation3 = new TimelineMax(); //animation3.set("#bag-fill",{clip:"rect(250px, 250px, 250px, 130px"})

    animation3.to(["#bag-fill", "#moneysign"], 5, {
      css: {
        clip: "rect(80px, 250px, 250px, 130px"
      }
    });
    animation3.repeat(-1).yoyo(true).play();
  }
}

function pauseAnimation3() {
  animation3.pause();
}

function startAnimation4() {
  if (animation4initiated) {
    animation4.play();
  } else {
    animation4initiated = true;
    animation4 = new TimelineMax({
      repeatDelay: 0
    });
    animation4.to("#box-4-seat-belf", 3, {
      css: {
        clip: "rect(0px, 250px, 180px, 0px"
      }
    });
    animation4.to("#box-4-stearing", 0.5, {
      ease: Power0.easeNone,
      rotation: 3
    }, "-=3");
    animation4.to("#box-4-stearing", 0.5, {
      ease: Power0.easeNone,
      rotation: -3
    }, "-=2.5");
    animation4.to("#box-4-stearing", 0.5, {
      ease: Power0.easeNone,
      rotation: 3
    }, "-=2");
    animation4.to("#box-4-stearing", 0.5, {
      ease: Power0.easeNone,
      rotation: -3
    }, "-=1.5");
    animation4.to("#box-4-stearing", 0.5, {
      ease: Power0.easeNone,
      rotation: 3
    }, "-=1");
    animation4.to("#box-4-stearing", 0.5, {
      ease: Power0.easeNone,
      rotation: -3
    }, "-=0.5");
    animation4.to("#box-4-stearing", 0.5, {
      ease: Power0.easeNone,
      rotation: 3
    });
    animation4.to("#box-4-stearing", 0.5, {
      ease: Power0.easeNone,
      rotation: -3
    });
    animation4.repeat(-1).yoyo(true).play();
  }
}

function pauseAnimation4() {
  animation4.pause();
} // init controller


var controller = new ScrollMagic.Controller(); // create a scene
// new ScrollMagic.Scene({
//         duration: 100,    // the scene should last for a scroll distance of 100px
//         offset: 50    // start this scene after scrolling for 50px
//     })
//     .setPin("#box-1") // pins the element for the the scene's duration
//     .addTo(controller); // assign the scene to the controller

var scene = new ScrollMagic.Scene({
  triggerElement: "#box-1",
  duration: 250
}).addTo(controller).addIndicators() // add indicators (requires plugin)
.on("update", function (e) {
  $("#scrollDirection").text(e.target.controller().info("scrollDirection"));
}).on("enter", function (e) {
  $("#state").text(e.type == "enter" ? "inside" : "outside");
  startAnimation1();
}).on("leave", function (e) {
  $("#state").text(e.type == "enter" ? "inside" : "outside");
  pauseAnimation1();
}).on("start end", function (e) {
  $("#lastHit").text(e.type == "start" ? "top" : "bottom");
}).on("progress", function (e) {
  $("#progress").text(e.progress.toFixed(3));
});
var scene2 = new ScrollMagic.Scene({
  triggerElement: "#box-2",
  duration: 250
}).addTo(controller).addIndicators() // add indicators (requires plugin)
.on("update", function (e) {
  $("#scrollDirection").text(e.target.controller().info("scrollDirection"));
}).on("enter", function (e) {
  $("#state").text(e.type == "enter" ? "inside" : "outside");
  startAnimation2();
}).on("leave", function (e) {
  $("#state").text(e.type == "enter" ? "inside" : "outside");
  pauseAnimation2();
}).on("start end", function (e) {
  $("#lastHit").text(e.type == "start" ? "top" : "bottom");
}).on("progress", function (e) {
  $("#progress").text(e.progress.toFixed(3));
});
var scene3 = new ScrollMagic.Scene({
  triggerElement: "#box-3",
  duration: 250
}).addTo(controller).addIndicators() // add indicators (requires plugin)
.on("update", function (e) {
  $("#scrollDirection").text(e.target.controller().info("scrollDirection"));
}).on("enter", function (e) {
  $("#state").text(e.type == "enter" ? "inside" : "outside");
  startAnimation3();
}).on("leave", function (e) {
  $("#state").text(e.type == "enter" ? "inside" : "outside");
  pauseAnimation3();
}).on("start end", function (e) {
  $("#lastHit").text(e.type == "start" ? "top" : "bottom");
}).on("progress", function (e) {
  $("#progress").text(e.progress.toFixed(3));
});
var scene4 = new ScrollMagic.Scene({
  triggerElement: "#box-4",
  duration: 250
}).addTo(controller).addIndicators() // add indicators (requires plugin)
.on("update", function (e) {
  $("#scrollDirection").text(e.target.controller().info("scrollDirection"));
}).on("enter", function (e) {
  $("#state").text(e.type == "enter" ? "inside" : "outside");
  startAnimation4();
}).on("leave", function (e) {
  $("#state").text(e.type == "enter" ? "inside" : "outside");
  pauseAnimation4();
}).on("start end", function (e) {
  $("#lastHit").text(e.type == "start" ? "top" : "bottom");
}).on("progress", function (e) {
  $("#progress").text(e.progress.toFixed(3));
});

//# sourceMappingURL=main.js.map
