function lovecal(event){
    event.preventDefault();

let yourName = document.getElementById("yourName").value;
let theirName = document.getElementById("theirName").value;
let Sex= document.getElementById("sex").value;
Male = "him";
Female = "her";

yourName = Math.random()*101;
theirName= Math.random()*101;
let result = (yourName + theirName)/2;
result=Math.floor(result);

let resultElement = 
document.getElementById("result");
resultElement.innerHTML ="You are " + result + "% compatible with " + 
(Sex === "Male" ? Male:Female);
}