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
        let active = document.querySelector("div.active")
        active.classList.remove("active")
        document.querySelector("main").classList.remove("open")
        setTimeout(() => { active.addEventListener("click", frontendModul.openLogin); }, 300)
    }
}

const backendModul = {

}

const elements = {
    users: document.querySelectorAll("div.teacher, div.student"),
}

elements.users.forEach(user => user.addEventListener("click", frontendModul.openLogin))