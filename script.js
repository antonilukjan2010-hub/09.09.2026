const btn = document.querySelector(".btn")


function alert2() {
    alert("Poznajesz nas na tej stronie")
}
btn.addEventListener("click", alert2)







































const number1 = parseFloat(document.querySelector(".number1").value)
const number2 = parseFloat(document.querySelector(".number2").value)
const btn1 = document.querySelector(".wyślij")
const div1 = document.querySelector(".div1")

function dodaj2() {
    const number1 = parseFloat(document.querySelector(".number1").value)
const number2 = parseFloat(document.querySelector(".number2").value)
const btn1 = document.querySelector(".wyślij")
const div1 = document.querySelector(".div1")
    const number3 = number1 + number2 
    div1.textContent = number3
}


btn1.addEventListener("click", dodaj2)
















