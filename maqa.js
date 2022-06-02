console.log("Mirzeyev Mehemmed");
document.getElementById("demo").innerHTML = "Mirzeyev Mehemmed";
document.write("Mirzeyev Mehemmed");

function imgShow() {
    document.getElementById("photo").src = "indir.png";
}

let fristname = prompt("Enter your name and fristname")

console.log(fristname);

document.getElementById("demo").innerText = fristname;

window.alert(fristname);
