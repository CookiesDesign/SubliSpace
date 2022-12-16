let openModal = document.getElementById('openModal');
let modalTemperaturas = document.getElementById('modal');
let closeModal = document.getElementById('close');

//Open Modal

openModal.onclick = function() {
    modalTemperaturas.style.visibility = "visible";
}

//Close Modal

closeModal.onclick = function() {
    modalTemperaturas.style.visibility = "hidden";
}

//Close Windows

modalTemperaturas.onclick = function() {
    modalTemperaturas.style.visibility = "hidden";
}