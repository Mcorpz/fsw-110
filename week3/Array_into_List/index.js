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


    var h1 =document.createElement("h1")
    document.body.append(h1)
    h1.textContent = "Hello World"
    document.body.append(h1)

    for (1 = 0;  1 < 11;  i++)
    document.body.append(h1)
    h1.textContent="Hello World"

    function alpha() {
        for (1 = 0;  1 < 11;  i++)
        var h1 = document.createElement('h1')
        h1.textContent="Hello World"
        document.body.append(h1)
        console.log('Hello WORLD')
    }

    alpha()