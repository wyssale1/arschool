const frontendModul = {
    showModal(id) {
        let temp = document.querySelector(`#${id}-modal`)
        let modal = temp.content.cloneNode(true)
        document.querySelector("footer").appendChild(modal)
        setTimeout(() => { document.querySelector(".modal").classList.add("show")}, 10)
        setTimeout(() => { document.querySelectorAll("button").forEach(btn => btn.addEventListener("click", backendModul.atobBtn)) }, 300)
    },
    removeModal() {
        let modal = document.querySelectorAll(".modal")
        modal.forEach(el => el.classList.remove("show"))
        document.querySelectorAll("button").forEach(btn => btn.removeEventListener("click", backendModul.atobBtn))
        setTimeout(() => { modal.forEach(el => el.remove()) }, 300)
    }
}


const backendModul = {
    atobBtn() {
        this.closest(".modal").querySelectorAll("button").forEach(btn => btn.classList.remove("active"))
        this.classList.add("active")
        backendModul.newAnswer(this)
    },
    newAnswer(element) {
        console.log(element.dataset.answer)
    }
}
