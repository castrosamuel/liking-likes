var userList = {
    "neil" : 9,
    "nicole" : 12,
    "jim" : 9
}

function likeCount(userName){

    userList[userName] = userList[userName] + 1
    var likes = userList[userName]
    var className = "." + userName
    if (likes > 1){
        document.querySelector(className).innerHTML = likes + " like(s)"
    } else {
        document.querySelector(className).innerHTML =  likes + " like"
    }
    
}