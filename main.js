const texto = document.querySelector("main h1")
const inp1 = document.querySelector("main div.entrada-1 input")
const bt1 = document.querySelector("main div.entrada-1 button")

bt1.onclick = function() {
    texto.innerText = inp1.value
    inp1.value = ""
}