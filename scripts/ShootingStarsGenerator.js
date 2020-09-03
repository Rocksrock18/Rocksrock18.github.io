var interval;

function GenerateStars(){
    interval = setInterval(function(){
        var star = document.createElement("li");
        star.classList.add("shooting-star");
        document.getElementById("StarListParents").appendChild(star);
    }, 1000);
}

function StopStarGeneration(){
    clearInterval(interval);
}
