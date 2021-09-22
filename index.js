// this handles what happens when we click the button
const button= document.getElementById("submit")
button.addEventListener("click", HandleClick)

function HandleClick(){
    const startDate = document.getElementById("startDate").value
    const endDate = document.getElementById("endDate").value
    const answer = (Number(endDate) - Number(startDate)) * 365 * 24 * 60 * 60
    alert(`The number of seconds between ${startDate} and ${endDate} is ${answer} seconds`)
}