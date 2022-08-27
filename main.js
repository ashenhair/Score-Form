let userformDOM = document.querySelector("#userForm")

const alertDOM = document.querySelector("#alert")

function alert(color="danger")
    {
        alertDOM.innerHTML = `<div class="alert alert-${color} alert-dismissible fade show" role="alert" id="alert">
                <strong>Başlık bilgisi! </strong> Hatalı giriş.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`
 
    } 
userformDOM.addEventListener("submit",formHandler)

function formHandler(event)
    {
        event.preventDefault()
        const USER_NAME = document.querySelector("#username")
        const SCORE = document.querySelector("#score")

        if(USER_NAME.value && SCORE.value) 
            {
                addItem(USER_NAME.value,SCORE.value)
                USER_NAME.value = ""
                SCORE.value = ""
                
            }
        else 
            {
                alert()
               
                
            }

{/* <div class="alert alert-warning alert-dismissible fade show" role="alert" id="alert">
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> */}

    }





    
userListDOM = document.querySelector("#userList")
function addItem(userName,score)
    {
        console.log(`isminiz ${userName} ve puanınız : ${score}`)

        let liDOM = document.createElement("li")
        liDOM.innerHTML = `${userName} <span class="badge bg-primary rounded-pill">${score}</span>`
        liDOM.classList.add(`list-group-item`,`d-flex`,`justify-content-between`,`align-items-center`)
        



        userListDOM.append(liDOM)
    }