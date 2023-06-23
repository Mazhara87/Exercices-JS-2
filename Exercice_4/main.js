document.addEventListener('DOMContentLoaded', function(){
    let resetButton = document.getElementById('resetButton');
    let lastname = document.getElementById('lastname');
    let firstname = document.getElementById('firstname');
    let city = document.getElementById('city');
    resetButton.addEventListener('click', function() {
        lastname.value = '';
        firstname.value = '';
        city.value = '';
    });
});