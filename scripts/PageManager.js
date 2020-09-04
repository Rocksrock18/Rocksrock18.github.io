function changeStyleSheet(sheet) {
    document.getElementById("theme").setAttribute("href", sheet);
    var scenic = "css/scenic.css";
    var stars = "css/stars.css";
    var videoSheet = sheet;
    videoSheet == scenic ? playVideo() : pauseVideo();
    videoSheet == stars ? GenerateStars() : DeleteStars();
  }
  function fadeInElement(name) {
    var old = document.getElementsByClassName("on");
    fadeOutElement(old[0]);
    var element = document.getElementsByClassName(name);
    setTimeout(function(){ element[0].classList.remove("off"); element[0].classList.add("activating");}, 1000);
    setTimeout(function(){ element[0].classList.remove("activating"); element[0].classList.add("on");}, 2000);
  }
  function fadeOutElement(element) {
    element.classList.add("deactivating");
    element.classList.remove("on");
    setTimeout(function(){ element.classList.remove("deactivating"); element.classList.add("off");}, 1000);
  }
