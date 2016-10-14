//var response
//  = dice[Math.floor(Math.random()*dice.length)];
//gameOutput.html(response);      
var p1guess = $("#p1guess")
var p2guess = $("#p2guess")


p1guess.keydown(function(enter) {
  if (enter.keyCode == 13){
    var number1 = p1guess.val()
  p1guess.val("")
  console.log(number1)
  }
})

p2guess.keydown(function(enter) {
  if (enter.keyCode == 13){
    var number2 = p2guess.val()
    p1=2guess.val("")
    console.log(number2)
  }
})


var dice = ["1","2","3","4","5","6"]

