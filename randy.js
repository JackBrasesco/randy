 
var p1guess = $("#p1guess")
var p2guess = $("#p2guess")
var p1display = $("#display1")
var p2display = $("#display2")
var p1roll = $("#p1roll")
var p2roll = $("#p2roll")


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

p2roll.click(function() {
  var dice2 = ["1","2","3","4","5","6"]


  var response
  = dice2[Math.floor(Math.random()*dice2.length)];
  p2display.html(response)
  var response2
  = dice2[Math.floor(Math.random()*dice2.length)];
  p2display.html(response)
  var response3
  = dice2[Math.floor(Math.random()*dice2.length)];
  p2display.html(response)
  var response4
  = dice2[Math.floor(Math.random()*dice2.length)];
  p2display.html(response)
  var response5
  = dice2[Math.floor(Math.random()*dice2.length)];
  p2display.html(response)
  
  
  
})

p1roll.click(function() {
var dice1 = ["1","2","3","4","5","6"]


var response
= dice1[Math.floor(Math.random()*dice1.length)];
p1display.html(response);
  p1list.push(respone)
  
  p1list = []

})