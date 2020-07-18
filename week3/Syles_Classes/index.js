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
