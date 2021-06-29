var likes = 3;
function likeCount(){
    likes++
    if (likes > 1){
        document.querySelector("#userBox #userLike").innerHTML = likes + " like(s)"
    } else {
        document.querySelector("#userBox #userLike").innerHTML =  likes + " like"
    }
    
}