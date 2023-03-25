window.document.onkeydown = function (e) {
    if (!e) {
      e = event.preventDefault();
    }
    if (e.keyCode == 27) {
      lightbox_close();
    }
  };
  
  function lightbox_open() {
    let lightBoxVideo = document.getElementById("VisaChipCardVideo");
    window.scrollTo(0, 0);
    document.getElementById("light").style.display = "block";
    document.getElementById("fade").style.display = "block";
    lightBoxVideo.play();
  }
  
  function lightbox_close() {
    let lightBoxVideo = document.getElementById("VisaChipCardVideo");
    document.getElementById("light").style.display = "none";
    document.getElementById("fade").style.display = "none";
    lightBoxVideo.pause();
  }
  
  window.document.onkeydown = function (e) {
    if (!e) {
      e = event.preventDefault();
    }
    if (e.keyCode == 27) {
      lightbox_close1();
      lightbox_close2();
      lightbox_close3();
      lightbox_close4();
    }
  };
  
  function lightbox_open1() {
    let lightBoxVideo = document.getElementById("VisaChipCardVideo1");
    window.scrollTo(0, 0);
    document.getElementById("light1").style.display = "block";
    document.getElementById("this-is-big-video-slider-fade").style.display = "block";
    lightBoxVideo.play();
  }
  
  function lightbox_close1() {
    let lightBoxVideo = document.getElementById("VisaChipCardVideo1");
    document.getElementById("light1").style.display = "none";
    document.getElementById("this-is-big-video-slider-fade").style.display = "none";
    lightBoxVideo.pause();
  }
  function lightbox_open2() {
    let lightBoxVideo = document.getElementById("VisaChipCardVideo2");
    window.scrollTo(0, 0);
    document.getElementById("light2").style.display = "block";
    document.getElementById("this-is-big-video-slider-fade").style.display ="block";
    lightBoxVideo.play();
  }
  
  function lightbox_close2() {
    let lightBoxVideo = document.getElementById("VisaChipCardVideo2");
    document.getElementById("light2").style.display = "none";
    document.getElementById("this-is-big-video-slider-fade").style.display ="none";
    lightBoxVideo.pause();
  }
  function lightbox_open3() {
    let lightBoxVideo = document.getElementById("VisaChipCardVideo3");
    window.scrollTo(0, 0);
    document.getElementById("light3").style.display = "block";
    document.getElementById("this-is-big-video-slider-fade").style.display ="block";
    lightBoxVideo.play();
  }
  
  function lightbox_close3() {
    let lightBoxVideo = document.getElementById("VisaChipCardVideo3");
    document.getElementById("light3").style.display = "none";
    document.getElementById("this-is-big-video-slider-fade").style.display ="none";
    lightBoxVideo.pause();
  }
  function lightbox_open4() {
    let lightBoxVideo = document.getElementById("VisaChipCardVideo4");
    window.scrollTo(0, 0);
    document.getElementById("light4").style.display = "block";
    document.getElementById("this-is-big-video-slider-fade").style.display ="block";
    lightBoxVideo.play();
  }
  
  function lightbox_close4() {
    let lightBoxVideo = document.getElementById("VisaChipCardVideo4");
    document.getElementById("light4").style.display = "none";
    document.getElementById("this-is-big-video-slider-fade").style.display ="none";
    lightBoxVideo.pause();
  }
  
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }
  
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName(
      "this-is-big-video-slider-mySlides"
    );
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
  }
  
  
  
  
  window.document.onkeydown = function (e) {
    if (!e) {
      e = event.preventDefault();
    }
    if (e.keyCode == 27) {
      lightbox_close();
    }
  };
  
  function lightbox_open() {
    let lightBoxVideo = document.getElementById("VisaChipCardVideo");
    window.scrollTo(0, 0);
    document.getElementById("light").style.display = "block";
    document.getElementById("fade").style.display = "block";
    lightBoxVideo.play();
  }
  
  function lightbox_close() {
    let lightBoxVideo = document.getElementById("VisaChipCardVideo");
    document.getElementById("light").style.display = "none";
    document.getElementById("fade").style.display = "none";
    lightBoxVideo.pause();
  }
  
  window.document.onkeydown = function (e) {
    if (!e) {
      e = event.preventDefault();
    }
    if (e.keyCode == 27) {
      lightbox_close1();
      lightbox_close2();
      lightbox_close3();
      lightbox_close4();
    }
  };
  
  function lightbox_open1() {
    let lightBoxVideo = document.getElementById("VisaChipCardVideo1");
    window.scrollTo(0, 0);
    document.getElementById("light1").style.display = "block";
    document.getElementById("this-is-big-video-slider-fade").style.display = "block";
    lightBoxVideo.play();
  }
  
  function lightbox_close1() {
    let lightBoxVideo = document.getElementById("VisaChipCardVideo1");
    document.getElementById("light1").style.display = "none";
    document.getElementById("this-is-big-video-slider-fade").style.display = "none";
    lightBoxVideo.pause();
  }
  function lightbox_open2() {
    let lightBoxVideo = document.getElementById("VisaChipCardVideo2");
    window.scrollTo(0, 0);
    document.getElementById("light2").style.display = "block";
    document.getElementById("this-is-big-video-slider-fade").style.display ="block";
    lightBoxVideo.play();
  }
  
  function lightbox_close2() {
    let lightBoxVideo = document.getElementById("VisaChipCardVideo2");
    document.getElementById("light2").style.display = "none";
    document.getElementById("this-is-big-video-slider-fade").style.display ="none";
    lightBoxVideo.pause();
  }
  function lightbox_open3() {
    let lightBoxVideo = document.getElementById("VisaChipCardVideo3");
    window.scrollTo(0, 0);
    document.getElementById("light3").style.display = "block";
    document.getElementById("this-is-big-video-slider-fade").style.display ="block";
    lightBoxVideo.play();
  }
  
  function lightbox_close3() {
    let lightBoxVideo = document.getElementById("VisaChipCardVideo3");
    document.getElementById("light3").style.display = "none";
    document.getElementById("this-is-big-video-slider-fade").style.display ="none";
    lightBoxVideo.pause();
  }
  function lightbox_open4() {
    let lightBoxVideo = document.getElementById("VisaChipCardVideo4");
    window.scrollTo(0, 0);
    document.getElementById("light4").style.display = "block";
    document.getElementById("this-is-big-video-slider-fade").style.display ="block";
    lightBoxVideo.play();
  }
  
  function lightbox_close4() {
    let lightBoxVideo = document.getElementById("VisaChipCardVideo4");
    document.getElementById("light4").style.display = "none";
    document.getElementById("this-is-big-video-slider-fade").style.display ="none";
    lightBoxVideo.pause();
  }
  
  


  // 
// 
// 
// 
// 
$(document).ready(function () {
  let itemsMainDiv = ".MultiCarousel";
  let itemsDiv = ".MultiCarousel-inner";
  let itemWidth = "";

  $(".leftLst, .rightLst").click(function () {
    let condition = $(this).hasClass("leftLst");
    if (condition) click(0, this);
    else click(1, this);
  });

  ResCarouselSize();

  $(window).resize(function () {
    ResCarouselSize();
  });

  //this function define the size of the items
  function ResCarouselSize() {
    let incno = 0;
    let dataItems = "data-items";
    let itemClass = ".item";
    let id = 0;
    let btnParentSb = "";
    let itemsSplit = "";
    let sampwidth = $(itemsMainDiv).width();
    let bodyWidth = $("body").width();
    $(itemsDiv).each(function () {
      id = id + 1;
      let itemNumbers = $(this).find(itemClass).length;
      btnParentSb = $(this).parent().attr(dataItems);
      itemsSplit = btnParentSb.split(",");
      $(this)
        .parent()
        .attr("id", "MultiCarousel" + id);

      if (bodyWidth >= 1200) {
        incno = itemsSplit[3];
        itemWidth = sampwidth / incno;
      } else if (bodyWidth >= 992) {
        incno = itemsSplit[2];
        itemWidth = sampwidth / incno;
      } else if (bodyWidth >= 768) {
        incno = itemsSplit[1];
        itemWidth = sampwidth / incno;
      } else {
        incno = itemsSplit[0];
        itemWidth = sampwidth / incno;
      }
      $(this).css({
        transform: "translateX(0px)",
        width: itemWidth * itemNumbers,
      });
      $(this)
        .find(itemClass)
        .each(function () {
          $(this).outerWidth(itemWidth);
        });

      $(".leftLst").addClass("over");
      $(".rightLst").removeClass("over");
    });
  }

  //this function used to move the items
  function ResCarousel(e, el, s) {
    let leftBtn = ".leftLst";
    let rightBtn = ".rightLst";
    let translateXval = "";
    let divStyle = $(el + " " + itemsDiv).css("transform");
    let values = divStyle.match(/-?[\d\.]+/g);
    let xds = Math.abs(values[4]);
    if (e == 0) {
      translateXval = parseInt(xds) - parseInt(itemWidth * s);
      $(el + " " + rightBtn).removeClass("over");

      if (translateXval <= itemWidth / 2) {
        translateXval = 0;
        $(el + " " + leftBtn).addClass("over");
      }
    } else if (e == 1) {
      let itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
      translateXval = parseInt(xds) + parseInt(itemWidth * s);
      $(el + " " + leftBtn).removeClass("over");

      if (translateXval >= itemsCondition - itemWidth / 2) {
        translateXval = itemsCondition;
        $(el + " " + rightBtn).addClass("over");
      }
    }
    $(el + " " + itemsDiv).css(
      "transform",
      "translateX(" + -translateXval + "px)"
    );
  }

  //It is used to get some elements from btn
  function click(ell, ee) {
    let Parent = "#" + $(ee).parent().attr("id");
    let slide = $(Parent).attr("data-slide");
    ResCarousel(ell, Parent, slide);
  }
});

