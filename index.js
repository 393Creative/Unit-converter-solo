
// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

// "l-data"
// "v-data"
// "m-data"


const inputEl =  document.querySelector('span')
const convertBtn = document.getElementById("convert-el")
const reset  = document.getElementById("reset")
let lDiv = document.getElementById("l-div")
let mDiv = document.getElementById("m-div")
let vDiv = document.getElementById("v-div")
let num = Number(inputEl.textContent)

reset.addEventListener("click", function() {
    inputEl.textContent = ""
})

convertBtn.addEventListener("click", function (){
    let num = Number(inputEl.textContent)
    lData.textContent = num
    mData.textContent = mValue
    vData.textContent = vValue
})













