//your JS code here. If required.
const para = document.getElementById("status");
const button = document.getElementById("enterBtn");

button.addEventListener("click", ()=>{
	let h1 = document.createElement("h1");
	h1.innerText = "Entered Metaverse";
	document.body.insertBefore(h1, button);
	para.remove();
})