var newP = document.createElement("p")
newP.textContent = 'All of this was created with Javascript'
document.body.append(newP)

var newLi1 = document.createElement("li")
newLi1.textContent = "orange"
var newLi2 = document.createElement("li")
newLi2.textContent = "apple"
var newLi3 = document.createElement("li")
newLi3.textContent = "banana"
var myList = document.createElement("ol")
document.body.append(myList);

myList.append(newLi1)
myList.append(newLi2)
myList.append(newLi3)
