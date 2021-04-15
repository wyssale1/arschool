const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()

const frontendModul = {
    openLogin() {
        document.querySelector("main").classList.add("open")
        this.classList.add("active")
        this.removeEventListener("click", frontendModul.openLogin)
        if(this.classList.contains("teacher")) {
            frontendModul.loginFormTeacher() 
        } else { 
            frontendModul.loginFormStudent()
        }
    },
    loginFormTeacher() {
        let temp = document.querySelector("template.teacher")
        setTimeout(() => {
            document.querySelector("div.teacher").appendChild(temp.content.cloneNode(true)) 
            document.querySelector("svg.close").addEventListener("click", frontendModul.closeLogin)
        }, 300) 
    },
    loginFormStudent() {
        let temp = document.querySelector("template.student")
        setTimeout(() => {
            document.querySelector("div.student").appendChild(temp.content.cloneNode(true)) 
            document.querySelector("svg.close").addEventListener("click", frontendModul.closeLogin)
        }, 300)
    },
    closeLogin() {
        this.closest(".form").remove()
        let main = document.querySelector("main")
        let active = document.querySelector("div.active")
        let sibling = (active.nextElementSibling) ? active.nextElementSibling : active.previousElementSibling
        sibling.classList.add("showing")
        main.classList.add("closing")
        active.classList.remove("active")
        main.classList.remove("open")
        setTimeout(() => {active.addEventListener("click", frontendModul.openLogin)}, 100)
        setTimeout(() => {sibling.classList.remove("showing")}, 300)
        setTimeout(() => {main.classList.remove("closing")}, 800)
    }
}

const backendModul = {

}

const elements = {
    users: document.querySelectorAll("div.teacher, div.student"),
}

elements.users.forEach(user => user.addEventListener("click", frontendModul.openLogin))