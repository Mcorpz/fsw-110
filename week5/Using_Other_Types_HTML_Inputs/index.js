const form = document.myForm

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    // console.log(form.gender.value)
    
    console.log(form.entertainment.value)
})

const checkedInputs = []
    
    for(let i = 0; i < form.dietaryRestrictions.length; i++){
        if(form.dietaryRestrictions[i].checked){
            checkedInputs.push(form.dietaryRestrictions[i].value)
        }
    }
    console.log(checkedInputs)