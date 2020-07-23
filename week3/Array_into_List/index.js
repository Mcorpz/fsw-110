var names =[
    "Steve",
    "Larry",
    "Joe", 
    "Shirley", 
    "Steph", 
    "Nate", 
    "Rick", 
    "Emily",
]

var newH2 = document.createElement("h2");

for ( var i = 0; i < names.length; i++){
        newH2.innerHTML += names[i]+"<br>"
        document.body.append(newH2)
    };

