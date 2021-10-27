let prev = document.querySelector("#preview")
let inpRech = document.querySelector('input')
let listePrev = document.querySelectorAll('#preview>div')
inpRech.addEventListener('input', (e) => {
    console.log(e)
    let textIn = e.target.value
    if (textIn.length > 2) {
        fetch("./rech.php?name=" + textIn).then(res => res.json()).then(data => {
            console.log(data)

            prev.innerHTML = ""
            for (let i in data) {
                let elem = document.createElement('div')
                elem.innerHTML = data[i].Name
                prev.appendChild(elem)
            }
            prev.style.display = "block"
            listePrev = document.querySelectorAll('#preview>div')
            for (let i = 0; i < listePrev.length; i++) {
                listePrev[i].addEventListener('click', (e) => {

                    inpRech.value = e.target.innerHTML
                    prev.innerHTML = ""
                    prev.style.display = "none"
                })
            }
        })
    }
})

document.body.addEventListener('click', () => {
    prev.innerHTML = ""
    prev.style.display = "none"
})