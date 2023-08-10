function main(){
var random1 = Math.floor(Math.random()*6)+1;
var picture = "../ownProject/images/dice"+random1+".png";
var image1 = document.querySelectorAll("img")[0].setAttribute("src",picture);

var random2 = Math.floor(Math.random()*6)+1;
var picture = "../ownProject/images/dice"+random2+".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src",picture);

if(random1>random2){
  document.querySelectorAll('p')[0].innerHTML="Player 1 has been Won"
}else if(random2>random1){
     document.querySelectorAll('p')[1].innerHTML="Player 2 has been Won"
}else{
     document.querySelector("h1").innerHTML="DRAW"
}
}

main();





