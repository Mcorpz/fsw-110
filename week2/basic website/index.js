var newNav = document.createElement("nav") 
document.body.append(newNav);


var newLink1 = document.createElement("a")
newLink1.textContent = 'Home'

newNav.append(newLink1)

var h1 = document.createElement("h1")
h1.textContent = "This is another week in DOM"
document.body.append(h1)

var pTag = document.createElement("p")
pTag.textContent = "This class is becoming more techincal by the week!"
document.body.append(pTag)

var newList1 = document.createElement("li")
newList1.textContent = "Youtube"
var newList2 = document.createElement("li")
newList2.textContent = "Facebook"
var newList3 = document.createElement("li")
newList3.textContent = "Netflix"
var myList = document.createElement("ol")
document.body.append(myList);

myList.append(newList1)
myList.append(newList2)
myList.append(newList3)


var newFooter = document.createElement("footer") 
document.body.append(newFooter);

var newLink2 = document.createElement("a")
newLink2.textContent = 'Mcorpz'
newFooter.append(newLink2)