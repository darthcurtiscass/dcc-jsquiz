var displayEl = document.getElementById("hello")
var clickEl = document.getElementById("click")
var removeEl = document.getElementById('remove')
var opposite = document.getElementById('opposite')


function displayIt(){
    
    displayEl.style.display = "flex"
    console.log("string", displayEl.style.display)

}

function removeIt() {
    
    displayEl.style.display = "none"
    console.log("string", displayEl.style.display)
}
console.log("string", displayEl.style.display)
function dualPurpose() {
   
    if (displayEl.style.display === "none") {
        displayEl.style.display = "flex"
        console.log('Should display flex')
    } else if (displayEl.style.display === "flex") {
        displayEl.style.display = "none"
        console.log('Should display none')
    }
    console.log("string", displayEl.style.display)
    }
    


opposite.addEventListener("click", dualPurpose)
removeEl.addEventListener('click', removeIt)
clickEl.addEventListener("click", displayIt)