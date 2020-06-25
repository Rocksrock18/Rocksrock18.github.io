function playVideo() {
    var video = document.getElementById("vid");
    video.loop = true;
    video.play();
  }
  function pauseVideo() {
    var video = document.getElementById("vid");
    video.pause();
  }