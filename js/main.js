(function($){
    
    window.scrollTo(0, 0);
	
    setTimeout(function() { 
        $('body').addClass('is-visible');
        // window.scrollTo(0, 0);
        setTimeout(function() { 
        //  qrCodeTl.play();
      }, 200);
    }, 1000);


    // INIT CONTROLLER
	var controller = new ScrollMagic.Controller();
    var $phoneContainerInner = $('.phone-container-inner');
    var $phoneImg1 = $('.phone-img-1');
    var $phoneImg2 = $('.phone-img-2');
    var $phoneImg3 = $('.phone-img-3');
    var $phoneImg4 = $('.phone-img-4');
    var $phoneImgWhite = $('.phone-img-white');
    
    clearScene();
    function clearScene(){
        //alert('lol');
        var clearSceneTl = new TimelineMax();
        clearSceneTl
            .set($phoneContainerInner, { autoAlpha: 0, y: "+=20px", transformOrigin: "center center" })
            .set($phoneImg1, { autoAlpha: 0, transformOrigin: "center center" })
            .set($phoneImg2, { autoAlpha: 0, transformOrigin: "center center" })
            .set($phoneImg3, { autoAlpha: 0, transformOrigin: "center center" })
            .set($phoneImg4, { autoAlpha: 0, transformOrigin: "center center" })
            .set($phoneImgWhite, { autoAlpha: 0, transformOrigin: "center center" })
        return clearSceneTl;
    }

    var phoneSlideUp = new TimelineMax({ paused: false, repeat: 0 })
        .to($phoneContainerInner, 0.75, { autoAlpha: 1, y: "-=20px", ease: Power4.easeInOut }, "+=1.0")

    var qrCodeTl = new TimelineMax({ paused: false, repeat: -1 })
       
        .to($phoneImg1, 0.75, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($phoneImg1, 0.75, { autoAlpha: 0, ease: Power4.easeInOut }, "+=3.0")

        .to($phoneImg2, 0.75, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($phoneImg2, 0.75, { autoAlpha: 0, ease: Power4.easeInOut }, "+=3.0")

        .to($phoneImg3, 0.75, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($phoneImg3, 0.75, { autoAlpha: 0, ease: Power4.easeInOut }, "+=3.0")

        .to($phoneImg4, 0.75, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($phoneImg4, 0.75, { autoAlpha: 0, ease: Power4.easeInOut }, "+=3.0");
        
       
        //.seek('stop1');
       



        // const swiper = new Swiper('.swiper', {
        //     direction: 'vertical',
        //     loop: true,
        //     effect: 'fade',
        //     autoplay: {
        //         delay: 2500,
        //         disableOnInteraction: false,
        //       }
        // });



    //console.clear();

    
    // const circle2 = document.querySelector(".circle-2");
    // const circle3 = document.querySelector(".circle-3");
    // const circleA = document.querySelector(".circle-a");
    // const circleB = document.querySelector(".circle-b");
    // const circleC = document.querySelector(".circle-c");
    // const circleD = document.querySelector(".circle-d");

    // const randomX = random(5, 10);
    // const randomY = random(10, 20);

    // //pour les éléments au second plan
    // const randomX2 = random(3, 5);
    // const randomY2 = random(3, 5);


    // const randomDelay = random(0, 1);
    // const randomTime = random(3, 5);
    // const randomTime2 = random(5, 10);
    // const randomAngle = random(8, 12);

    

    // TweenLite.set(circle2, {
    //     x: randomX2(-1),
    //     y: randomX2(1),
    //     rotation: randomAngle(-1)
    // });
    // moveX2(circle2, 1);
    // moveY2(circle2, -1);
    // rotate(circle2, 1);

    // TweenLite.set(circle3, {
    //     x: randomX2(-1),
    //     y: randomX2(1),
    //     rotation: randomAngle(-1)
    // });
    // moveX2(circle3, 1);
    // moveY2(circle3, -1);
    // rotate(circle3, 1);
    

    // TweenLite.set(circleA, {
    //     x: randomX(-1),
    //     y: randomX(1),
    //     rotation: randomAngle(-1)
    // });
    // moveX(circleA, 1);
    // moveY(circleA, -1);
    // rotate(circleA, 1);

    // TweenLite.set(circleB, {
    //     x: randomX(-1),
    //     y: randomX(1),
    //     rotation: randomAngle(-1)
    // });
    // moveX(circleB, 1);
    // moveY(circleB, -1);
    // rotate(circleB, 1);

    // TweenLite.set(circleC, {
    //     x: randomX(-1),
    //     y: randomX(1),
    //     rotation: randomAngle(-1)
    // });
    // moveX(circleC, 1);
    // moveY(circleC, -1);
    // rotate(circleC, 1);

    // TweenLite.set(circleD, {
    //     x: randomX(-1),
    //     y: randomX(1),
    //     rotation: randomAngle(-1)
    // });
    // moveX(circleD, 1);
    // moveY(circleD, -1);
    // rotate(circleD, 1);






// function rotate(target, direction) {
  
//   TweenLite.to(target, randomTime2(), {
//     rotation: randomAngle(direction),
//     ease: Sine.easeInOut,
//     onComplete: rotate,
//     onCompleteParams: [target, direction * -1]
//   });
// }








// function moveX(target, direction) {
  
//   TweenLite.to(target, randomTime(), {
//     x: randomX(direction),
//     ease: Sine.easeInOut,
//     onComplete: moveX,
//     onCompleteParams: [target, direction * -1]
//   });
// }

// function moveY(target, direction) {
  
//   TweenLite.to(target, randomTime(), {
//     y: randomY(direction),
//     ease: Sine.easeInOut,
//     onComplete: moveY,
//     onCompleteParams: [target, direction * -1]
//   });
// }

//pour les éléments au second plan
// function moveX2(target, direction) {
  
//     TweenLite.to(target, randomTime(), {
//       x: randomX2(direction),
//       ease: Sine.easeInOut,
//       onComplete: moveX2,
//       onCompleteParams: [target, direction * -1]
//     });
//   }
  
//   function moveY2(target, direction) {
    
//     TweenLite.to(target, randomTime(), {
//       y: randomY2(direction),
//       ease: Sine.easeInOut,
//       onComplete: moveY2,
//       onCompleteParams: [target, direction * -1]
//     });
//   }






function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}

  

	
    
     


  
})(jQuery);