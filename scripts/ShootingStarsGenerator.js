
function GenerateStars(){
    for(i = 0; i < 9; i++){
        GenerateChildren(i);
    }
}

function GenerateChildren(index){
    for(var i = 0; i < 4; i++)
    {
        var star = document.createElement("div");
        star.innerHTML = '&bigstar;';
        star.classList.add("shooting-star-spawn");
        document.getElementById("StarListParents").children[index].appendChild(star);
    }
}

function DeleteStars(){
    for(i = 0; i < 9; i++){
        DeleteChildren(i);
    }
}

function DeleteChildren(index){
    for(var i = 0; i < 4; i++)
    {
        document.getElementById("StarListParents").children[index].children[0].remove();
    }
}
