const form = document.querySelector("#info")
const nombre = document.querySelector("#nombre")
const nombreHelp = document.querySelector("#nombreHelp")
const apellido = document.querySelector("#apellido")
const apellidoHelp = document.querySelector("#apellidoHelp")
const email = document.querySelector("#email")
const emailHelp = document.querySelector("#emailHelp")
const direccion = document.querySelector("#direccion")
const direccionHelp = document.querySelector("#direccionHelp")


form.addEventListener("submit", (event) => {
	event.preventDefault()
	if (nombre.value === "" || apellido.value === "" || 
		email.value === "" || direccion.value === "") {
		if (nombre.value === "") {
			nombreHelp.innerText ="¡Por favor, completar info!"
		}
		if (apellido.value === "") {
			apellidoHelp.innerText ="¡Por favor, completar info!"
		}
		if (email.value === "") {
			emailHelp.innerText ="¡Por favor, completar info!"
		}
		if (direccion.value === "") {
			direccionHelp.innerText ="¡Por favor, completar info!"
		}
	} else {
		form.submit();
	}
})

