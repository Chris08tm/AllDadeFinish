const btn = document.querySelector('submit-btn')
const inputs = document.querySelector('form')
btn.addEventListener('click', () => {

    const name = (inputs.elements["name"].value).trim()
    const email = (inputs.elements["email"].value).trim()
    const msg = (inputs.elements["message"].value.trim())
    const phone = (inputs.elements["phone"].value).trim()
    if (!name.length > 0 || !email.length > 0 || !msg.length > 0 || !phone.length > 0) {
        alert("All fields are mandatory")
        return
    }
    Email.send({
        Host: "sandbox.smtp.mailtrap.io",
        Username: "6daec53cc7312f",
        Password: "dda88cf2860d10",
        To: "yoandy56@gmail.com",
        From: email,
        Subject: "Contact Us Query By the Customer",
        Body: msg + "<br>" + name + "<br>" + phone
    }).then(msg => alert("The email successfully sent"))
})