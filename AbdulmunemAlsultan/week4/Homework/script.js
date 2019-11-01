
function factors(){
var factor = parseInt (document.getElementById("Number").value);

if ((factor % 3 === 0) && (factor % 5 === 0)){
    document.getElementById("output").innerHTML = "PlingPlang --> ("+3 +" , "+5+")";
}
else if(factor % 3 === 0) {
document.getElementById("output").innerHTML = "Pling --> ("+3+")";
}
else if(factor % 5 === 0){
    document.getElementById("output").innerHTML = "Plang --> ("+ 5+")";
}
else if(factor % 7 === 0){
    document.getElementById("output").innerHTML = "Plong --> ("+7+")";
}

else {
    document.getElementById("output").innerHTML = "Stupid Number";  
}

}