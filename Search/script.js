//JavaScript code
function search_film() {
    let input = document.getElementById("pesquisa").value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName("programa");

    for (i=0; i<=x.length; i++) {
        if (x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display="list-item";
        }
        else{
            x[i].style.display="none";
        }
    }
}