const inputEl =  document.getElementById("input-el")
const convertBtn = document.getElementById("convert-el")
const reset  = document.getElementById("reset")
let lDiv = document.getElementById("l-div")
let mDiv = document.getElementById("m-div")
let vDiv = document.getElementById("v-div")

reset.addEventListener("dblclick", function() {
    inputEl.value = ""

    lDiv.innerHTML = `<h3>Length (Meter/Feet)</h3>`
    vDiv.innerHTML = `<h3>Volume (Liters/Gallons)</h3>`         
    mDiv.innerHTML = `<h3>Mass (Kilograms/Pounds)</h3>`
})

convertBtn.addEventListener("click", function (){
    const num = Number(inputEl.value)

    const feet = num * 3.28084
    const meters = num * 0.3048
    const gallons = num * 0.264172
    const liters = num * 3.78541
    const pounds = num * 2.20462
    const kilos = num / 2.205

    lDiv.innerHTML = `<h3>Length (Meter/Feet)</h3> 
                    <p>${num} meters = ${feet.toFixed(2)} feet | ${num} feet = ${meters.toFixed(2)} meters</p>`
    vDiv.innerHTML = `<h3>Volume (Liters/Gallons)</h3>
                    <p>${num} liters = ${gallons.toFixed(2)} gallons | ${num} gallons = ${liters.toFixed(2)} liters</p>`
    mDiv.innerHTML = `<h3>Mass (Kilograms/Pounds)</h3>
                    <p>${num} kilos = ${pounds.toFixed(2)} pounds | ${num} pounds = ${kilos.toFixed(2)} kilos</p>`
})