//Get values of the form and set variables
let names = document.getElementById('name');
let cellphone = document.getElementById('phone-number');
let email = document.getElementById("email");
let country = document.getElementById("country");

document.querySelector('form').onsubmit = function() {validate()};

function validate(){

    const space=/^\s+$/;//RegEx for space
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(names.value==null || names.value ==''){
        const errorname = document.createElement('span');
        errorname.innerHTML ='Campo requerido';
        names.appendChild(errorname);
    }
    
}



