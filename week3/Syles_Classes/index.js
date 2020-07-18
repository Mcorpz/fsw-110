var games =[
    "Origins",
    "Odyssey",
    "Valhala",
    "Wildlands",
    "Breakpoint"
]

function h2(){
    for (i = 0; i < 5; i++){
        var newH2 = document.createElement("h2")
        document.body.append(newH2)
        newH2.textContent = games[i]
        newH2.className = "border"        
        newH2.style.color = "cornflowerblue"
        newH2.style.fontFamily = "sans-serif"
        newH2.style.fontWeight = "lighter"
        newH2.style.fontSize = "20"
    
}
}


h2()
// newLi1.textContent = "Origins"
// var newLi2 = document.createElement("li")
// newLi2.textContent = "Odyssey"
// var newLi3 = document.createElement("li")
// newLi3.textContent = "Valhala"
// var newLi4 = document.createElement("li")
// newLi4.textContent = "Wildlands"
// var newLi5 = document.createElement("li")
// newLi5.textContent = "Breakpoint"
// var myList = document.createElement("ol")
// document.body.append(myList);



// myList.append(newLi1)
// myList.append(newLi2)
// myList.append(newLi3)
// myList.append(newLi4)
// myList.append(newLi5)