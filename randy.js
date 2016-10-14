//var response
//  = dice[Math.floor(Math.random()*dice.length)];
//gameOutput.html(response);      
var p1guess = $("#p1guess")

p1guess.keydown(function(enter) {
  if (enter.keyCode == 13){
    var m
  
  p1guess.val("")
  }
})

var dice = ["1","2","3","4","5","6"]

