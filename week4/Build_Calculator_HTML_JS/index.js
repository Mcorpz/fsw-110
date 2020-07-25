// var additon = 
// additon.addEventListener("click", addNumbers)
// additon.addEventListener("click", function(){ myFunction(p1, p2); });
// firstNumber.getElementbyId.p1 = "firstNumber"
// secondNumber.getElementbyId.p2 = "secondNumber"

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
    // charlie.textContent = "answer"
    
    return charlie
}



// function addNumbers(p1, p2){
//     return p1 + p2
// }

// function btnadd() {
//     document.getElementById("totalOfNumber").innerHTML = "addNumbers";
//   }


// addEventListener('click',someEventHander.bind(event,param1,param2));

// function addNumber()
