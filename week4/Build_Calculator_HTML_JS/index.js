// ADDITION EQUATION
var num1 = document.getElementById("firstNumber")
var num2 = document.getElementById("secondNumber")
var sum = document.getElementById("sum")

sum.onclick = function (){
    var alpha = num1.value
    var bravo = num2.value
    console.log(alpha)
    console.log(bravo)
    console.log(Number(alpha) + Number(bravo))
    var charlie = document.getElementById('answer').textContent = `The answer is ${Number(alpha) + Number(bravo)}!`
    
    
    return charlie
}
// SUBTRACTION EQUATION
var num1 = document.getElementById("thirdNumber")
var num2 = document.getElementById("forthNumber")
var sum = document.getElementById("sub")
sub.onclick = function (){
    var delta = num1.value
    var foxtrot = num2.value
    console.log(delta)
    console.log(foxtrot)
    console.log(Number(delta) - Number(foxtrot))
    var hotel = document.getElementById('answer1').textContent = `The answer is ${Number(delta) - Number(foxtrot)}!`
    
    
    return hotel
}

// MULTIPLICATION EQUATION
var num1 = document.getElementById("fithNumber")
var num2 = document.getElementById("SixthNumber")
var sum = document.getElementById("mul")
mul.onclick = function (){
    var golf = num1.value
    var india = num2.value
    console.log(golf)
    console.log(india)
    console.log(Number(golf) * Number(india))
    var juliet = document.getElementById('answerSub1').textContent = `The answer is ${Number(golf) * Number(india)}!`
    
    
    return juliet
}