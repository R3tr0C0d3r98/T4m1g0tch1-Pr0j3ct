alert ("welcome to virtual pet day care")

let health = 10
let boredom = 0

 function bored(){
     if (boredom >=0){
        document.getElementById("bored").innerHTML =  "Boredom level is now " +boredom
     }
 else{
    if (boredom ==150){
         document.getElementById("bored").innerHTML =  "Your pet is Bored"
    }
}
}

function feed(){
if (health == 0) {
document.getElementById("fed").innerHTML = "Your pet is dead";
document.getElementById("lifeup").innerHTML = ("Health: " + health);
}
else {
    if (health >=1){
        boredom= boredom + 7
        health = health + 5
        document.getElementById("fed").innerHTML = "Your pet has eaten";
        document.getElementById("lifeup").innerHTML = ("Health: " + health);
        document.getElementById("bored").innerHTML= "your pets boredom has increased to " + boredom
     }
}
}

function play(){
    if (health == 0){
    document.getElementById("play").innerHTML = ("Why would you do that you sick person");
    document.getElementById("lifedown").innerHTML = ("Health: " + health);
}
    else {
    if (health >=1){
        boredom = boredom - 7
        health = health - 5
        document.getElementById("play").innerHTML = ("You play with your pet");
        document.getElementById("lifedown").innerHTML = ("Health: " + health);
        document.getElementById("bored").innerHTML =  "Boredom level is now " +boredom
    }
}
}
function reset(){
    if (health == 0){
        health = health + 10
        document.getElementById("restart").innerHTML = ("Health reset to " + health)
    }
    else if (health >10){
            document.getElementById("restart").innerHTML = ("return health to 10")
            health = health ==10
        }
    else {
        document.getElementById("restart").innerHTML = ("health reset")
    }
     if (boredom >0){
         boredom = boredom ==0
        document.getElementById("restart").innerHTML = ("boredom reset")
 }
}
