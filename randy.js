 
var p1guess = $("#p1guess")
var p2guess = $("#p2guess")
var p1display = $("#display1")
var p2display = $("#display2")


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
    p2guess.val("")
    console.log(number2)
  }
})


var dice1 = ["1","2","3","4","5","6"]


var response
= dice1[Math.floor(Math.random()*dice1.length)];
p1display.html(response);   

var dice2 = ["1","2","3","4","5","6"]


var response
= dice1[Math.floor(Math.random()*dice1.length)];
p1display.html(response)