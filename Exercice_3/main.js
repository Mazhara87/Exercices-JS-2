document.addEventListener('DOMContentLoaded', function() {
    let inputField = document.getElementById('inputField');
    inputField.addEventListener('keydown', function(event) {
        let value = inputField.value;
        alert('la valeur du champ est : ' + value);
    });
});