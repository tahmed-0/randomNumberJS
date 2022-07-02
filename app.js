
function myFunction() {
    const getResults = parseInt(document.getElementById("randomNumber").value);

    var random = Math.floor((Math.random() * getResults));

    document.getElementById("results").innerHTML = random;
    
}

function clearField() {
    document.getElementById("randomNumber").value = "";
    document.getElementById("results").innerHTML = "ㅤ";

}