const formElement=document.getElementById("myForm");
const paragraphElement=document.getElementById("paragraph");

formElement.addEventListener("submit",changeTheText);

function changeTheText(event){
	event.preventDefault();
	paragraphElement.innerText=`https://localhost:8080/?name=${event.target[0].value} & year=${event.target[1].value}`
	formElement.reset()
}