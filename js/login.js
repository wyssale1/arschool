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
            document.querySelector("button#create-room").addEventListener("click", backendModul.createRoom) 
            document.querySelector("svg.close").addEventListener("click", frontendModul.closeLogin)
        }, 300) 
    },
    loginFormStudent() {
        let temp = document.querySelector("template.student")
        setTimeout(() => {
            document.querySelector("div.student").appendChild(temp.content.cloneNode(true))
            document.querySelector("button#login").addEventListener("click", backendModul.studentLogin)  
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
    },
    errorInput(input) {
        input.classList.add("error")
    }
}

const backendModul = {
    createRoom() {
        let input = document.querySelector("input#name")      
        let name = (input.value) ? databaseModul.newRoom(input.value) : frontendModul.errorInput(input)
    },
    studentLogin() {
        let inputCode = document.querySelector("input#code")
        let code = (inputCode.value) ? true : frontendModul.errorInput(inputCode)
        let inputName = document.querySelector("input#name")
        let name = (inputName.value) ? true : frontendModul.errorInput(inputName)
        if (name === true && code === true) {
            databaseModul.studentLogin(inputCode.value, inputName.value)
        }
    }
}

let url = "../arschool/includes/"
const databaseModul = {
    newRoom(name) {
        fetch(`${url}login.php`, {
            method: "post",
            body: JSON.stringify({
                function: "teacher-login",
                name: name
            })
        }).then(response => response.text())
        .then((data) => (data === "success") ? window.location.replace("teacher") : console.log(data))
    },
    studentLogin(code, name) {
        fetch(`${url}login.php`, {
            method: "post",
            body: JSON.stringify({
                function: "student-login",
                code: code,
                name: name
            })
        }).then(response => response.text())
        .then((data) => (data === "success") ? window.location.replace("student") : console.log(data))
    }
}

const elements = {
    users: document.querySelectorAll("div.teacher, div.student"),
}

elements.users.forEach(user => user.addEventListener("click", frontendModul.openLogin))