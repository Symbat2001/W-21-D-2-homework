const area = document.getElementById("textInput")
const saveBtn = document.getElementById("save")
const clearBtn = document.getElementById("clear") 

if (localStorage.getItem("save")) {
    area.value = localStorage.getItem("save")
}

saveBtn.addEventListener("click", function (e) {
    e.preventDefault()
    localStorage.setItem("save", area.value)
    alert("Málımet sáttı saqtaldy!")
    
})

area.textContent = localStorage.getItem("save")

clearBtn.addEventListener("click", function (e) {
    e.preventDefault()
    localStorage.clear()
    area.value = ""
    alert("Mátın óshırıldı!")

})